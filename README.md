# personal-website

A template for an academic personal website, configurable by updating two files only, and built without any dependency in vanilla JavaScript.

Make it yours by updating the `resume.js` file at the root of the directory, and the `publications.json` and `author_stats.json` files in the `publications` directory.

The `publications.json` file can be automatically generated using *e.g.* Zotero. 

Some things to consider:

- Publications **must have** either a DOI, an URL, or an ISSN.
- Projects **must have** a start date and an end date (they are sorted using the end date).
- Education and work experience **must have** a start date (they are sorted using the start date).

## Inspiration

- [Bartosz Jarocki CV](https://github.com/BartoszJarocki/cv): this is where I got the majority of the code from. I liked the simplicity of the design, but it is relying on Next.js 14, React, Typescript, Shadcn/ui and TailwindCss. I wanted to make a website that would be as simple as possible, without any dependency, so that it could be easily modified by anyone, and deployed freely without a build step on *e.g.* Github pages.
-  [Shadcn/ui](https://ui.shadcn.com/) for the design.

To do:

- [ ] Clean-up the CSS file, we don't need everything (it was originally built using TailwindCss).
- [ ] Make a script to automatically update the stats values with a github action. Take the values from *e.g.* google scholar or ResearchGate
- [ ] Add citation number to each publication (article section). Take the info from google scholar?
- [ ] Add conference list
- [ ] Talks list ?
- [ ] Github projects I am proud of?
- [ ] Better skills section: add a progress bar of some sort?
- [ ] Interest section ? Bullet points of things I like: FSPM, ecophysiology, Julia, lidar, etc.
- [ ] Better manage how to print the CV. This is already implemented with the hidden class, but I didn't use it everywhere yet.