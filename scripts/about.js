// Name of the website:
document.querySelector(".js-title").innerHTML = `${RESUME_DATA.name} | ${RESUME_DATA.title}`;
document.querySelector(".js-person").innerHTML = RESUME_DATA.name;
document.querySelector(".js-about").innerHTML = RESUME_DATA.about;
document.querySelector(".js-location").innerHTML = `
<a class="js-location inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
    href="${RESUME_DATA.locationLink}" target="_blank">
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
