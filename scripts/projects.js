
document.querySelector(".js-projects").innerHTML = `
  <h2 id="projects" class="text-xl font-bold">Projects</h2>

  <div class="projects__list -mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">

  ${RESUME_DATA.projects
      .map(
      (project) => `
      <div class="project rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
          <div class="flex flex-col space-y-1.5">
              <div class="space-y-1">
                  <h3 class="font-semibold tracking-tight text-base">
                      <a href="${project.link.href}" target="_blank"
                          class="inline-flex items-center gap-1 hover:underline">${project.title}
                          <span class="size-1 rounded-full bg-green-500"></span>
                      </a>
                  </h3>
                  <div class="hidden font-mono text-xs underline print:visible">${project.link.label}</div>
                  <img class="project__logo" src=${project.logo} alt="${project.title} logo" />
                  <p class="text-muted-foreground font-mono text-xs">${project.description}</p>
              </div>
          </div>
          <div class="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
              <div class="mt-2 flex flex-wrap gap-1">
              ${project.techStack
                  .map(
                      (tech) =>
                      `<div class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">${tech}</div>`
                  )
                  .join("")}
              </div>
          </div>
      </div>
      `
      )
      .join("")}
  </div>
  `;