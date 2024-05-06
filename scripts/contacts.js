
let CONTACTS_DATA = '';

if (RESUME_DATA.contact.email) {
    CONTACTS_DATA += `
    <a href="mailto:${RESUME_DATA.contact.email}" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8">
        <img src="./media/icons/email.svg" alt="${RESUME_DATA.contact.email.title}" class="size-4"/>
    </a>
    `;
}

if (RESUME_DATA.contact.tel) {
    CONTACTS_DATA += `
    <a href="tel:${RESUME_DATA.contact.tel}" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8">
        <img src="./media/icons/phone.svg" alt="${RESUME_DATA.contact.tel.title}" class="size-4"/>
    </a>
    `;
}

// If there are social media links:
if (RESUME_DATA.contact.social.length > 0) {
    RESUME_DATA.contact.social.forEach((social) => {
        CONTACTS_DATA += `
        <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8">
            <img src="${social.icon}" alt="${social.title}" class="size-4"/>
        </a>
        `;
    });
}

console.log(CONTACTS_DATA);
document.querySelector(".js-contacts").innerHTML = CONTACTS_DATA;