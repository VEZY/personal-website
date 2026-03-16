// Name of the website:
const pageTitle = `${RESUME_DATA.given} ${RESUME_DATA.family} | ${RESUME_DATA.title}`;
document.title = pageTitle;
document.querySelector(".js-title").textContent = pageTitle;
document.querySelector(".js-favicon").href = RESUME_DATA.favicon;
document.querySelector(".js-person").textContent = `${RESUME_DATA.given} ${RESUME_DATA.family}`;
document.querySelector(".js-about").innerHTML = renderInlineContent(RESUME_DATA.headline);
document.querySelector(".js-location").innerHTML = `
<a class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
    href="${RESUME_DATA.locationLink}" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" class="lucide lucide-globe size-3">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
    </svg>    
    ${RESUME_DATA.location}
</a>
`;

document.querySelector(".js-profile-picture").innerHTML = `
    <img class="aspect-square h-full w-full" alt="${RESUME_DATA.given} ${RESUME_DATA.family}" src="${RESUME_DATA.avatarUrl}"/>
`;

const summaryHTML = (RESUME_DATA.summary ?? []).map((paragraph) => `
    <p>${renderInlineContent(paragraph)}</p>
`).join("");
const focusHTML = (RESUME_DATA.currentFocus ?? []).length > 0 ? `
    <div class="about-focus">
        <p class="about-focus__title">${escapeHTML(RESUME_DATA.currentFocusTitle ?? "Current Focus")}</p>
        <ul class="about-focus__list">
            ${(RESUME_DATA.currentFocus ?? []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
        </ul>
    </div>
` : "";

document.querySelector(".js-summary").innerHTML = `${summaryHTML}${focusHTML}`;

const metaDescription = RESUME_DATA.seoDescription ?? "";
document.querySelector('meta[name="description"]')?.setAttribute("content", metaDescription);
document.querySelector('meta[property="og:title"]')?.setAttribute("content", pageTitle);
document.querySelector('meta[property="og:description"]')?.setAttribute("content", metaDescription);
document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", pageTitle);
document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", metaDescription);

document.querySelector(".js-copyright").innerHTML += `
    Copyright &copy; ${new Date().getFullYear()} ${RESUME_DATA.given} ${RESUME_DATA.family}.
    Like this site? <a class = "underline" href="https://github.com/VEZY/personal-website">Make it your own with the template on Github</a>
`;
