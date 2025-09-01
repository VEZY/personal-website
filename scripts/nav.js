// Scrollspy: highlight active nav item based on section positions
(function() {
  const navLinks = Array.from(document.querySelectorAll('.navigation .nav-item'));
  const sectionIds = navLinks.map(a => a.getAttribute('href')).filter(Boolean).map(h => h.replace('#',''));
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (sections.length === 0) return;

  const linkFor = (id) => navLinks.find(a => a.getAttribute('href') === `#${id}`);

  let activeId = null;
  const setActive = (id) => {
    if (!id || id === activeId) return;
    activeId = id;
    navLinks.forEach(a => a.removeAttribute('aria-current'));
    const link = linkFor(id);
    if (link) link.setAttribute('aria-current', 'true');
  };

  // Choose the last section whose top has crossed an offset from the top
  const OFFSET = 120; // px from viewport top
  const computeActiveFromScroll = () => {
    let current = sections[0].id;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top - OFFSET <= 0) {
        current = sections[i].id;
      } else {
        break;
      }
    }
    setActive(current);
  };

  // Debounce with rAF
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (Date.now() < suppressUntil) { ticking = false; return; }
        computeActiveFromScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  // Handle clicks for smooth scroll and temporary override
  let suppressUntil = 0;
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        suppressUntil = Date.now() + 800; // ignore scrollspy briefly during smooth scroll
        setActive(id);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Ensure hash updates without jumping
        history.pushState(null, '', href);
      }
    });
  });

  // Listen to both window and main scroll (content scrolls inside main)
  const main = document.querySelector('main');
  (main || window).addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('hashchange', () => setActive(location.hash.replace('#','')));

  // Initialize on load
  computeActiveFromScroll();
  if (location.hash) setActive(location.hash.replace('#',''));
})();
