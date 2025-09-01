const currentYear = new Date().getFullYear();

function isOngoing(project) {
    const end = project.end;
    if (end == null) return false;
    const endStr = String(end).trim().toLowerCase();
    if (endStr === 'present' || endStr === 'ongoing' || endStr === 'current') return true;
    const endYear = parseInt(endStr, 10);
    if (Number.isNaN(endYear)) return false;
    return endYear >= currentYear;
}

let PROJECTS_DATA = ``;
let resumeProjectsOrdered = RESUME_DATA.projects.sort((a, b) => b.end - a.end);

if (resumeProjectsOrdered.length > 0) {
    // Determine first past-project index (first non-ongoing)
    const firstPastIndex = resumeProjectsOrdered.findIndex(p => !isOngoing(p));
    const hasPast = firstPastIndex !== -1;
    const PAST_VISIBLE_LIMIT = 6; // number of past projects to show when collapsed

    PROJECTS_DATA += `
    <div class="projects__list -mx-3 flex justify-between">
        <h2 class="text-xl font-bold">Projects</h2>
        <div class="inline-flex items-center gap-2 text-xs justify-end font-mono">
            <span class="inline-flex items-center gap-1"><span class="size-1 rounded-full bg-green-500"></span> Ongoing</span>
        </div>
    </div>

    <div class="projects__list -mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3 projects-grid collapsible-grid ${hasPast ? 'is-collapsed' : ''}">
        ${resumeProjectsOrdered.map((p) => formatProject(p)).join("")}
        ${hasPast ? '<div class="fadeout" aria-hidden="true"></div>' : ''}
    </div>
    ${hasPast ? `
    <div class="mt-2 flex justify-center">
      <button class="projects-collapse-toggle inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3" aria-expanded="false">
        Show all projects
      </button>
    </div>
    ` : ''}
    `;
}

function formatProject(project) {
    let projectHTML = '';

    projectHTML += `
        <div class="project rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3" data-ongoing="${isOngoing(project)}">
            <div class="flex flex-col space-y-1.5">
                <div class="space-y-1">
                        <h3 class="font-semibold tracking-tight text-base">
                            <a href="${project.link.href}" target="_blank" rel="noopener noreferrer"
                                class="inline-flex items-center gap-1 hover:underline">${project.title}
    `;

    if (isOngoing(project)) {
        projectHTML += `<span class="size-1 rounded-full bg-green-500" aria-label="Ongoing"></span>`
    }

    projectHTML += `
                            </a>
                        </h3>
                        <div class="text-pretty font-mono text-xs text-muted-foreground flex overflow-hidden tracking-tight">
                            ${project.start}-${project.end}
                        </div>
                    <div class="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
                    </div>
                <div class="hidden font-mono text-xs underline print:visible">${project.link.label}</div>
                <img class="project__logo" src=${project.logo} alt="${project.title} logo" loading="lazy" decoding="async" />
                <p class="text-muted-foreground font-mono text-xs">${project.description}</p>
                ${(() => {
                    const hasDetails = Boolean(project.role || project.workPackage || project.task || project.referee || project.contribution);
                    if (!hasDetails) return '';
                    const roles = [];
                    if (project.role) roles.push(project.role);
                    if (project.workPackage) roles.push(`WP ${project.workPackage}`);
                    if (project.task) roles.push(`Task ${project.task}`);
                    if (project.referee) roles.push('Lab referee');

                    let html = `
                    <button class="project-popover-toggle" aria-expanded="false" aria-label="More details" type="button">i</button>
                    <div class="project-popover" role="tooltip" aria-hidden="true">`;
                    if (roles.length) {
                      html += `
                        <div class="project-popover__section">
                          <div class="project-popover__section-title">Role</div>
                          <div class="project-popover__roles">${roles.map(r => `<span class="role-chip">${r}</span>`).join('')}</div>
                        </div>`;
                    }
                    if (project.contribution) {
                      html += `
                        <div class="project-popover__section">
                          <div class="project-popover__section-title">Contribution</div>
                          <div class="project-popover__contrib">${project.contribution}</div>
                        </div>`;
                    }
                    html += `</div>`;
                    return html;
                })()}
            </div>
        </div>
        <div class="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
            <div class="mt-2 flex flex-wrap gap-1">
            ${project.tags
                .map(
                        (tech) =>
                        `<div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">${tech}</div>`
                )
                .join("")}
            </div>
        </div>
    </div>
    `;

    return projectHTML;
}

// Collapse after the last row with an ongoing project; fade past projects in that last row
function applyCollapseFade() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.project'));
    if (cards.length === 0) return;
    // Determine columns by measuring first row
    const firstTop = cards[0].offsetTop;
    let cols = 1;
    for (let i = 1; i < cards.length; i++) {
        if (cards[i].offsetTop !== firstTop) { cols = i; break; }
        cols = i + 1;
    }
    if (cols < 1) cols = 1;

    // Last ongoing row
    let lastOngoingIndex = -1;
    cards.forEach((card, idx) => {
        if (card.dataset.ongoing === 'true') lastOngoingIndex = idx;
    });
    const lastVisibleRow = lastOngoingIndex >= 0 ? Math.floor(lastOngoingIndex / cols) : 0;

    // Reset
    cards.forEach(c => { c.classList.remove('past-extra'); c.style.opacity = '1'; });

    const collapsed = grid.classList.contains('is-collapsed');
    let anyHidden = false;
    cards.forEach((card, idx) => {
        const row = Math.floor(idx / cols);
        if (!collapsed) {
            card.style.opacity = '1';
            return;
        }
        if (row < lastVisibleRow) {
            card.style.opacity = '1';
        } else if (row === lastVisibleRow) {
            // Fade past projects in the last visible row
            card.style.opacity = (card.dataset.ongoing === 'true') ? '1' : '0.45';
        } else {
            card.classList.add('past-extra');
            anyHidden = true;
        }
    });

    const fadeEl = grid.querySelector('.fadeout');
    if (fadeEl) fadeEl.style.display = (collapsed && anyHidden) ? '' : 'none';
}

document.querySelector(".js-projects").innerHTML = PROJECTS_DATA;

// Apply initial collapse and reapply on resize (responsive columns)
requestAnimationFrame(() => applyCollapseFade());
window.addEventListener('resize', () => applyCollapseFade());

// Collapse toggle for past projects
const collapseToggle = document.querySelector('.projects-collapse-toggle');
const grid = document.querySelector('.projects-grid');
if (collapseToggle && grid) {
    collapseToggle.addEventListener('click', () => {
        const collapsed = grid.classList.toggle('is-collapsed');
        collapseToggle.setAttribute('aria-expanded', String(!collapsed));
        collapseToggle.textContent = collapsed ? 'Show all projects' : 'Show fewer projects';
        applyCollapseFade();
        window.dispatchEvent(new Event('resize'));
    });
}

// Notify layout-dependent scripts (e.g., scrollspy) that content size changed on initial render
window.dispatchEvent(new Event('resize'));

// Popover toggle logic for mobile/touch and accessibility
(function wireProjectPopovers(){
  const projects = Array.from(document.querySelectorAll('.project'));
  const closeAll = () => projects.forEach(card => {
    const pop = card.querySelector('.project-popover');
    const btn = card.querySelector('.project-popover-toggle');
    if (pop) pop.classList.remove('is-open');
    if (btn) btn.setAttribute('aria-expanded','false');
  });

  projects.forEach(card => {
    const btn = card.querySelector('.project-popover-toggle');
    const pop = card.querySelector('.project-popover');
    if (!btn || !pop) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const willOpen = !pop.classList.contains('is-open');
      closeAll();
      if (willOpen) {
        pop.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
      }
    });
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest('.project')) return; // clicks inside project are handled
    closeAll();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
})();
