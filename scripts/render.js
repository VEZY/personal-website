function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function isAbsoluteUrl(value) {
    return /^https?:\/\//i.test(String(value || "").trim());
}

function renderOptionalLink(label, href, className = "", openInNewTab = true) {
    const safeLabel = escapeHTML(label);
    const cssClass = className ? ` class="${className}"` : "";

    if (!isAbsoluteUrl(href)) {
        return `<span${cssClass}>${safeLabel}</span>`;
    }

    const externalAttrs = openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a${cssClass} href="${escapeHTML(href)}"${externalAttrs}>${safeLabel}</a>`;
}

function renderInlineContent(parts, linkClass = "underline hover:text-accent-foreground") {
    return (parts ?? []).map((part) => {
        if (typeof part === "string") {
            return escapeHTML(part);
        }

        const text = escapeHTML(part.text ?? "");
        const content = part.strong ? `<strong>${text}</strong>` : text;

        if (part.href) {
            return `<a href="${escapeHTML(part.href)}" class="${linkClass}" target="_blank" rel="noopener noreferrer">${content}</a>`;
        }

        return content;
    }).join("");
}
