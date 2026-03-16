const serviceSection = document.querySelector(".js-service");
const serviceItems = RESUME_DATA.service ?? [];
const serviceTitle = document.querySelector(".js-service-title");

if (serviceTitle) {
    serviceTitle.textContent = RESUME_DATA.serviceTitle ?? "Scientific Leadership";
}

if (serviceSection && serviceItems.length > 0) {
    const serviceMarkup = serviceItems.map((item) => `
    <div class="rounded-lg bg-card text-card-foreground">
        <div class="flex flex-col gap-y-1">
            <div class="service-item-header text-base">
                <h3 class="service-item-title font-semibold leading-none">${renderInlineContent(item.title)}</h3>
                <div class="service-item-org text-sm text-gray-500">${escapeHTML(item.organization)}</div>
            </div>
            <div class="text-pretty font-mono text-muted-foreground text-xs">${escapeHTML(item.description)}</div>
        </div>
    </div>
    `).join("");

    serviceSection.innerHTML += serviceMarkup;
} else if (serviceSection) {
    serviceSection.remove();
}
