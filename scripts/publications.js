async function fetchJSON(filePath) {
    try {
        const response = await fetch(filePath);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(`Error fetching file ${filePath}:`, error);
        return null;
    }
}

let articleListHTML = "";
let bookListHTML = "";
let conferenceListHTML = "";
let softwareListHTML = "";

// Parse the JSON file and create the HTML elements of each publication:
fetchJSON('./media/publications.json').then((publications) => {
    let nArticles = 0;

    publications.sort((a, b) => {
        const yearA = a.issued["date-parts"][0][0];
        const yearB = b.issued["date-parts"][0][0];
        return yearB - yearA;
    }).forEach((publication) => {
        let publicationHTML = createPublicationHTML(publication);
        if (publication.type === 'article-journal') {
            articleListHTML += publicationHTML;
            nArticles++;
        } else if (publication.type === 'book' || publication.type === 'chapter') {
            bookListHTML += publicationHTML;
        } else if (publication.type === 'paper-conference') {
            conferenceListHTML += publicationHTML;
        } else if (publication.type === 'software') {
            softwareListHTML += publicationHTML;
        }
    }
    );    

    if (articleListHTML !== "") {
        document.querySelector('.js-publications').innerHTML+=`
        <h3 class="text-lg font-bold toggle-publications"><span class="arrow">&#9654;</span> Articles</h3>
        <div class="flex flex-col gap-y-3 publication-container">
            ${articleListHTML}
        </div>        
        `;
    }

    if (bookListHTML !== "") {
        document.querySelector('.js-publications').innerHTML+=`
        <h3 class="text-lg font-bold toggle-publications"><span class="arrow">&#9654;</span> Books</h3>
        <div class="flex flex-col gap-y-3 publication-container">
            ${bookListHTML}
        </div>
        `;
    }

    if (conferenceListHTML !== "") {
        document.querySelector('.js-publications').innerHTML+=`
        <h3 class="text-lg font-bold toggle-publications"><span class="arrow">&#9654;</span> Conference</h3>

        <div class="flex flex-col gap-y-3 publication-container">
            ${conferenceListHTML}
        </div>
        `;
    }

    if (softwareListHTML !== "") {
        document.querySelector('.js-publications').innerHTML+=`
        <h3 class="text-lg font-bold toggle-publications"><span class="arrow">&#9654;</span> Software</h3>
        <div class="flex flex-col gap-y-3 publication-container">
            ${softwareListHTML}
        </div>
        `;
    }

    document.querySelectorAll('.toggle-publications').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const container = button.nextElementSibling;
            button.classList.toggle('open');
            container.classList.toggle('open');
        });

        fetchJSON('./media/author_stats.json').then((stats) => {
            document.querySelectorAll('.science-stats').forEach((element) => {
                element.innerHTML = getScienceStatsHTML(stats, nArticles);
            });
        });
    });
});



function getJournal(publication) {
    let journal = publication['container-title'];
    if (journal === undefined) {
        journal = publication['publisher'];
    }
    return journal;
}

function getDOI(publication) {
    let doi = "";
    if (publication.DOI === undefined) {
        if (publication.URL === undefined) {
            if (publication.ISSN === undefined) {
                doi = {reference : '', link: ''};
            }else{
                doi = {
                    reference: publication.ISSN,
                    link: `https://portal.issn.org/api/search?search[]=MUST=allissnbis=%22${publication.ISSN}%22`                    
                };
            }
        }else{
            doi = processURL(publication.URL);
        }
    } else {
        // DOI are either given as e.g. "10.5281/zenodo.7038481", or with the full address e.g. https://doi.org/10.5281/zenodo.7038481
        // We want to always return an object with the doi, and then the link (`{reference: doi, link: link}`), so if it is given as a link we want to extract the doi,
        // and if it is given as a doi we want the full link too:
        doi = processDoi(publication.DOI)
    }
    
    return doi;
}

function processURL(url) {
    return {reference : url.replace('https://www.', ''), link: url}
}

function processDoi(doi) {
    const doiPrefix = 'https://doi.org/';
    let reference, link;

    if (doi === undefined) {
        // If doi is undefined, set reference and link as undefined
        reference = undefined;
        link = undefined;
    } else if (doi.startsWith(doiPrefix)) {
        // If it's a full URL, extract the DOI reference
        reference = doi.substring(doiPrefix.length);
        link = doi;
    } else {
        // If it's just the DOI reference, construct the full URL
        reference = doi;
        link = doiPrefix + doi;
    }

    return { reference, link };
}

function getYear(publication) {
    return publication.issued["date-parts"][0][0];
}

function createPublicationHTML(publication) {
    let authors = getAuthorsStudentsHighlighted(publication.author, 6, 2, 1);
    let journal = getJournal(publication);
    let doi = getDOI(publication);
    let year = getYear(publication);

    let publicationHTML = `
    <div class="rounded-lg bg-card text-card-foreground p-3 border border-muted overflow-hidden">
        <div class="font-mono text-sm leading-none">
            ${publication.title}
            <p class="text-pretty font-medium font-mono text-muted-foreground mt-2 text-xs">${authors}</p>
        </div>
        <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
                <div class="text-pretty font-mono text-muted-foreground mt-2 text-xs">
                    <div class="font-semibold">
                        ${journal} <a href="${doi.link}" class="hover:underline font-medium" target="_blank">${doi.reference}</a>
                    </div>    
                </div>    
                <div class="text-pretty font-mono text-muted-foreground mt-2 text-xs">${year}</div>
            </div>
        </div>
    </div>
    `;

    return publicationHTML;
}

function getScienceStatsHTML(stats, nArticles) {
    stats.articles = nArticles
    stats.lastUpdate = new Date(stats.lastUpdate)
    const userLocale = navigator.language || navigator.userLanguage;
    const lastUpdate = stats.lastUpdate.toLocaleDateString(userLocale, { year: 'numeric', month: 'long', day: 'numeric' });
    return `
    <div class="flex flex-wrap text-xl font-bold gap-1">
        <div class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
                <span>Citations: ${stats.citations}</span>
        </div>
        <div class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
                <span>h-index: ${stats.hIndex}</span>
        </div>
        <div class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
                <span>i10-index: ${stats.i10Index}</span>
        </div>
        <div class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
                <span>A-Rank articles: ${stats.articles}</span>
        </div>
    </div>
    <p class="text-xs justify-end font-mono text-pretty text-muted-foreground mt-2">Last update: ${lastUpdate}</p>
    `
}