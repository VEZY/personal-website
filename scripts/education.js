const EDUCATION_DATA = RESUME_DATA.education.sort((a, b) => b.start - a.start).map((edu) => {
    return `
    <div class="rounded-lg bg-card text-card-foreground">
        <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
                <h3 class="font-semibold leading-none">${edu.school}</h3>
                <div class="text-sm tabular-nums text-gray-500">${edu.start} - ${edu.end}</div>
            </div>
        </div>
        <div class="text-pretty font-mono text-sm text-muted-foreground mt-2">${edu.degree}</div>
    </div>
    `;
}).join("");

document.querySelector(".js-education").innerHTML += EDUCATION_DATA;