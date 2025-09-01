// Highlight active nav item and set aria-current based on section visibility
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
    if (id === activeId) return;
    activeId = id;
    navLinks.forEach(a => a.removeAttribute('aria-current'));
    const link = linkFor(id);
    if (link) link.setAttribute('aria-current', 'true');
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, {
    root: null,
    threshold: 0.6
  });

  sections.forEach(sec => io.observe(sec));
})();

