
let CONTACTS_DATA = '';

if (RESUME_DATA.contact.email) {
    CONTACTS_DATA += `
    <a href="mailto:${RESUME_DATA.contact.email}" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="lucide lucide-mail size-4">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>    
    </a>
    `;
}

if (RESUME_DATA.contact.tel) {
    CONTACTS_DATA += `
    <a href="tel:${RESUME_DATA.contact.tel}" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="lucide lucide-phone size-4">
            <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
            </path>
        </svg>
    </a>
    `;
}

// If there are social media links:
if (RESUME_DATA.contact.social.length > 0) {
    RESUME_DATA.contact.social.forEach((social) => {
        CONTACTS_DATA += `
        <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8">
            <object class="js-contact size-4" type="image/svg+xml" data="${social.icon}" alt="${social.title}" onload="this.parentNode.replaceChild(this.contentDocument.documentElement, this);"></object>
        </a>
        `;
    });
}

document.querySelector(".js-contacts").innerHTML = CONTACTS_DATA;

// Change the SVGs colors to the color it should inherit from the parent element's:
let socialMediaLinks = document.querySelectorAll(".js-contact");
socialMediaLinks.forEach((socialMediaLink) => {
    socialMediaLink.addEventListener("load", function() {
        if (socialMediaLink.contentDocument) {
            let svgDocument = socialMediaLink.getSVGDocument();
            let svgElement = svgDocument.querySelector("path");
            svgElement.style.fill = window.getComputedStyle(socialMediaLink).color;
        }
    });
});