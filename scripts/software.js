const GH_ICON = './media/icons/github.svg';

let SOFTWARE_HTML = ``;
const software = Array.isArray(RESUME_DATA.software) ? RESUME_DATA.software : [];

if (software.length > 0) {
  SOFTWARE_HTML += `
  <div class="projects__list -mx-3 flex justify-between">
    <h2 class="text-xl font-bold">Software</h2>
    <a target="_blank" class="inline-flex items-center gap-1 text-xs justify-end font-mono" href="https://github.com/${RESUME_DATA.contact?.social?.find?.(s=>s.name==="GitHub")?.url?.split('github.com/')[1] || 'VEZY'}" rel="noopener noreferrer">
      <object class="size-3" type="image/svg+xml" data="${GH_ICON}" onload="this.parentNode.replaceChild(this.contentDocument.documentElement, this);"></object>
      GitHub
    </a>
  </div>

  <div class="projects__list -mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
  `;

  SOFTWARE_HTML += software.map(formatSoftwareCard).join("");
  SOFTWARE_HTML += `</div>`;
}

function formatSoftwareCard(pkg) {
  let html = '';
  html += `
    <div class="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
      <div class="flex items-start justify-between">
        <h3 class="font-semibold tracking-tight text-base">
          <a href="${pkg.link.href}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 hover:underline">
            ${pkg.title}
          </a>
        </h3>
        <img src="${GH_ICON}" alt="GitHub" class="size-4" />
      </div>
      <div class="text-pretty font-mono text-xs text-muted-foreground">
        ${pkg.description}
      </div>
      <div class="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
        <div class="mt-2 flex flex-wrap gap-1">
          ${(pkg.tags || []).map(t => `<div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">${t}</div>`).join('')}
        </div>
      </div>
      <div class="hidden font-mono text-xs underline print:visible">${pkg.link.label}</div>
    </div>
  `;
  return html;
}

document.querySelector('.js-software').innerHTML = SOFTWARE_HTML;
// Notify layout-dependent scripts (e.g., scrollspy) that content changed
window.dispatchEvent(new Event('resize'));

