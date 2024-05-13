// Parse authors list, with students authors underlined, main author in bold, and stripping authors if the author list is too long:
function getAuthorsStudentsHighlighted(authors, maxAuthors=6, firstAuthors=2, lastAuthors=1) {
    if (authors.length > maxAuthors) {
        let highlightedAuthors = [];
        let lastKeptIndex = -1;
        let strippedAuthors = [];

        authors.forEach((author, index) => {
            if (index < firstAuthors || index >= authors.length - lastAuthors || isAuthorInAuthorsList(author, RESUME_DATA.students) || isAuthorEqual(author, RESUME_DATA)) {
                if (lastKeptIndex !== -1 && index - lastKeptIndex > 1) {
                    if (strippedAuthors.length === 1) {
                        highlightedAuthors.push(getAuthorString(strippedAuthors[0]));
                    } else {
                        highlightedAuthors.push(`...[${strippedAuthors.length}]`);
                    }
                    strippedAuthors = [];
                }
                highlightedAuthors.push(getAuthorString(author));
                lastKeptIndex = index;
            } else {
                strippedAuthors.push(author);
            }
        });

        // Handle last authors:
        if (strippedAuthors.length > 0) {
            if (strippedAuthors.length === 1) {
                highlightedAuthors.push(getAuthorString(strippedAuthors[0]));
            } else {
                highlightedAuthors.push(`...[${strippedAuthors.length}]`);
            }
        }

        return highlightedAuthors.join(', ');
    } else {
        return authors.map((author) => getAuthorString(author)).join(', ');
    }
}

function getAuthorString(author) {
    if (author) {
        let fullName = `${author.given} ${author['non-dropping-particle'] ? author['non-dropping-particle'] + ' ' : ''}${author.family}`;

        if (isAuthorInAuthorsList(author, RESUME_DATA.students)) {
            return `<span><u>${fullName}</u></span>`;
        } else if (isAuthorEqual(author, RESUME_DATA)) {
            return `<span class="font-bold">${fullName}</span>`;
        } else {
            return fullName;
        }
    } else {
        return 'ERROR PROCESSING AUTHOR';
    }
}

function normalizedString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Replace special characters with their normalized equivalent (e.g. é -> e):
// Note that we do this because authors lists can be inconsistent in the way they are written.
// For example, some authors are written as "Rémi Vezy" and others as "Remi Vezy".
function normalizedName(name) {
    return normalizedString(name.trim());;
}

function isNameEqual(name, reference) {
    if (name === reference) {
        // We first test the name as is
        return true;
    }else if (normalizedName(name).replace(".", "").length == 1) {
        // If the name is given as an initial, we compare it to the initial of the reference name.
        return normalizedName(name) === reference[0];
    } else {
        // Otherwise, we compare the normalized name to the normalized reference name, in case there is a 
        // difference in accents or special characters.
        return normalizedName(name) === normalizedName(reference);  
    }
}

// Is the given and family name of the author equal to the given and family name of the reference author?
function isAuthorEqual(author, reference) {
    return isNameEqual(author.given, reference.given) && isNameEqual(author.family, reference.family);
}

// Is the author in a the reference list of authors?
function isAuthorInAuthorsList(author, authorsList) {
    return authorsList.some((reference) => isAuthorEqual(author, reference));
}