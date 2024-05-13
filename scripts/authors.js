// Another function to get authors, but with authors in the STUDENT const highlighted:
function getAuthorsStudentsHighlighted(authors) {
    return authors.map((author) => {
        if (author){      
            if (isAuthorInAuthorsList(author, RESUME_DATA.students)) {
                // return `<span class="font-bold">${author.given} ${author.family}</span>`;
                return `<span><u>${author.given} ${author.family}</u></span>`;
            } else if (isAuthorEqual(author, RESUME_DATA)) {
                return `<span class="font-bold">${author.given} ${author.family}</span>`;
            } else {
                return `${author.given} ${author.family}`;
            }
        }else{
            return '';
        }

    }).join(', ');
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