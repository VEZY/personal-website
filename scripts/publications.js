async function fetchPublications() {
    try {
        const response = await fetch('./media/publications.json');
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Error fetching publications:', error);
        return null;
    }
}

let articleListHTML = "";
let bookListHTML = "";
let conferenceListHTML = "";
let softwareListHTML = "";

// Parse the JSON file and create the HTML elements of each publication:
fetchPublications().then((publications) => {
    publications.forEach((publication) => {
        let authors = publication.author.map((author) => `${author.given} ${author.family}`);
        // console.log(authors.join(', '));
        let journal = publication['container-title'];
        if (journal === undefined) {
            journal = publication['publisher'];
        }
        let doi = publication.DOI;
        if (doi === undefined) {
            doi = publication.URL;
            if (doi === undefined) {
                doi = publication.ISSN;
            }
        }
        let year = publication.issued["date-parts"][0][0];
        // <div class="flex flex-col gap-y-3">
        //     <div class="rounded-lg bg-card text-card-foreground">
        //         <div class="flex flex-col space-y-1.5">
        //             <div class="flex items-center justify-between gap-x-2 text-base">
        //                 <h3 class="font-semibold leading-none">Vezy, R.</h3>
        //                 <div class="text-sm tabular-nums text-gray-500">2020</div>
        //             </div>
        //         </div>
        //         <div class="text-pretty font-mono text-sm text-muted-foreground mt-2">Dynamic Agroforestry
        //             Coffee Crop Model (DynACof): A 3D Functional-Structural Plant Model for Coffee Agroforestry
        //             Systems. <em>Frontiers in Plant Science</em>, 11, 1-15.
        //         </div>
        //     </div>
        // </div>

        // If it is an article:
        // if (publication.type === 'article-journal') {
        //     publicationElement.classList.add('article');
        // }
        let publicationHTML =`
        <article class="rounded-lg bg-card text-card-foreground p-3 publication">
        <p class="font-mono text-sm leading-none">${publication.title}</p>
        <p class="text-pretty font-mono text-muted-foreground mt-2 text-xs">${authors.join(', ')}</p>
        <p class="text-pretty font-mono text-muted-foreground mt-2 text-xs">
            ${year}, ${journal}, 
            <a href="${doi}" class="hover:underline" target="_blank">${doi}</a>
        </p>
        </article>
        `;

        if (publication.type === 'article-journal') {
            articleListHTML += publicationHTML;
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
        <h3 class="text-lg font-bold">Articles</h3>
        <div class="flex flex-col gap-y-3">
            ${articleListHTML}
        </div>
        `;
    }

    if (bookListHTML !== "") {
        document.querySelector('.js-publications').innerHTML+=`
        <h3 class="text-lg font-bold">Books</h3>
        <div class="flex flex-col gap-y-3">
            ${bookListHTML}
        </div>
        `;
    }

    if (conferenceListHTML !== "") {
        document.querySelector('.js-publications').innerHTML+=`
        <h3 class="text-lg font-bold">Conference Papers</h3>
        <div class="flex flex-col gap-y-3">
            ${conferenceListHTML}
        </div>
        `;
    }

    if (softwareListHTML !== "") {
        document.querySelector('.js-publications').innerHTML+=`
        <h3 class="text-lg font-bold">Software</h3>
        <div class="flex flex-col gap-y-3">
            ${softwareListHTML}
        </div>
        `;
    }
});


