const RESUME_DATA = {
    name: "Rémi Vezy",
    initials: "RV",
    location: "Montpellier, France, UTC+2",
    locationLink: "https://www.google.com/maps/place/Montpellier",
    title: "Researcher in plant modelling",
    about:
      "Researcher in plant modelling, with a special interest in real-world applications.",
    summary:
      `I am a researcher at the AMAP lab in CIRAD specializing in plant modeling. 
      My work involves creating functional-structural plant models that can predict plant growth and yield based on environmental conditions and management practices. 
      My main goal is to develop scalable models that can be applied to different systems, from organs to plants, and even to complex systems like agroforestry. 
      Using my skills in agronomy, plant physiology, programming, and modeling, I aim to find sustainable solutions for farmers and stakeholders. 
      My work encompasses everything from innovative field measurement methods (such as whole-plant flux chambers and lidar) to developing hypotheses about plant functioning, implementing them into models, evaluating the models in isolation or in combination, and exploring innovative management approaches through prediction. 
      I also develop my own software to assist me in my modeling work.`,
    avatarUrl: "https://avatars.githubusercontent.com/u/12777793?v=4",
    personalWebsiteUrl: "https://remivezy.com",
    contact: {
      email: "remi.vezy@cirad.fr",
      tel: "+33467614455",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/VEZY",
          icon: "./media/icons/github.svg",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/remivezy/",
          icon: "./media/icons/linkedin.svg",
        },
        {
          name: "X",
          url: "https://x.com/VezyRemi",
          icon: "./media/icons/x.svg",
        },
        {
          name: "ORCiD",
          url: "https://orcid.org/0000-0002-0808-1461",
          icon: "./media/icons/orcid.svg",
        },
        {
          name: "Scholar",
          url: "https://scholar.google.fr/citations?user=09R4xY0AAAAJ&hl",
          icon: "./media/icons/google-scholar.svg",
        },
      ],
    },
    education: [
      {
        school: "Bordeaux University",
        degree: "Doctorate in environmental physics: Simulation of alternative management practices for the adaptation of perennial plantations to global changes",
        start: "2014",
        end: "2017",
      },
    ],
    work: [
      {
        company: "CIRAD",
        link: "https://www.cirad.fr/en",
        badges: ["Permanent position"],
        title: "Researcher in functional-structural plant modelling",
        // logo: ParabolLogo,
        start: "2018",
        end: "Present",
        description:
          `I develop models to simulate the development, growth and yield of plants in response to environmental conditions and management practices. 
          I mostly use Julia nowadays, but still develop some software in R and Fortran. I am currently working on oil palm, cacao, sahelian agroforestry systems, and intercrops.`,
      },
      {
        company: "INRAE",
        link: "https://www.inrae.fr/en",
        badges: ["Postdoc position"],
        title: "Postdoc in crop modelling",
        // logo: ClevertechLogo,
        start: "2018",
        end: "2018",
        description:
          "My role was to improve the intercrop version of the STICS soil-crop model using a comprehensive database from INRAE Toulouse. The model is in FORTRAN, and I developed an R interface called SticRs, one of the precursor of SticsRPacks.",
      },
      {
        company: "INRAE",
        link: "PhD position",
        badges: [],
        title: "Doctorate in environmental physics",
        // logo: JojoMobileLogo,
        start: "2014",
        end: "2017",
        description:
          "Simulation of alternative management practices for the adaptation of perennial plantations to global changes. I developed DynACof, the Dynamic Agroforestry Coffee Crop Model (see Vezy et al. 2020). The model is in R and Julia. I also helped improve the MAESPA model, a 3D biophysical model for plant canopies, with improvements on the computation of the energy balance (see Vezy et al. 2018).",
      },
    ],
    skills: [
      "Functional-structural plant modelling",
      "Plant physiology",
      "Agronomy",
      "Plant architecture",
      "Julia",
      "R",
      "FORTRAN",
      "Arduino",
    ],
    projects: [
        {
            title: "IntercropValuES",
            tags: [
              "EU Horizon",
              "8M€",
              "STICS",
              "FSPM",
            ],
            description: "Leverage intercropping to create productive, diverse, resilient, profitable, and eco-friendly cropping systems accepted by farmers and agri-food actors. 🌱🌾",
            link: {
              label: "intercropvalues.eu",
              href: "https://intercropvalues.eu/",
            },
            logo: "./media/projects/intercropvalues.png",
            start: "2022",
            end: "2026",
          },
      {
        title: "Cocoa4Future",
        tags: [
          "EU DESIRA",
          "7M€",
          "FSPM",
          "Julia",
        ],
        description: "Enhancing the sustainability of cocoa production in Ivory Coast and Ghana.",
        link: {
          label: "cocoa4future.com",
          href: "https://www.cocoa4future.org/",
        },
        logo: "./media/projects/cocoa4future.png",
        start: "2020",
        end: "2025",
      },
      {
        title: "PalmStudio",
        tags: ["Private sector", "0.4M€", "FSPM"],
        description:
          "Developing a functional-structural plant model for oil palm (Elaeis guineensis).",
        logo: "./media/projects/palmstudio.png",
        link: {
          label: "github.com",
          href: "https://github.com/PalmStudio",
        },
        start: "2018",
        end: "2025",
      },
      {
        title: "CaSSECS",
        tags: ["EU DESIRA", "5.6M€", "lidar"],
        description:
          "Carbon Sequestration and greenhouse gas emissions in agro-sylvopastoral ecosystems in the Sahelian CILSS States",
        logo: "./media/projects/cassecs.jpg",
        link: {
          label: "cassecs.org",
          href: "https://www.cassecs.org/",
        },
        start: "2020",
        end: "2024",
      },
      {
        title: "ReMIX",
        tags: ["EU Horizon", "5M€", "STICS"],
        description:
          "Creating more diverse and resilient arable cropping systems by leveraging species mixtures and agro-ecology principles.",
        logo: "./media/projects/remix.png",
        link: {
          label: "remix-intercrops.eu",
          href: "https://www.remix-intercrops.eu/",
        },
        start: "2014",
        end: "2021",
      },
      {
        title: "Arbratatouille",
        tags: ["Fondation de France", "lidar"],
        description:
          "Improving knowledge on interactions between trees and vegetable production, and propose new perspectives for agroforestry system conception and management.",
        logo: "./media/projects/arbratatouille.png",
        link: {
          label: "arbratatouille.net",
          href: "https://arbratatouille.projet-agroforesterie.net/EN/index.html",
        },
        start: "2014",
        end: "2021",
      },
      {
        title: "CoffeeFlux",
        tags: ["Private sector", "eddy-covariance"],
        description:
          "Coffee-flux aimed at making a comprehensive monitoring database of an agroforestry system with coffee in Costa Rica.",
        logo: "./media/projects/coffeeflux.jpg",
        link: {
          label: "umr-ecosols.fr",
          href: "https://www.umr-ecosols.fr/recherche/projets/projets-clos-avant-2020?view=article&id=53:coffee-flux&catid=17",
        },
        start: "2009",
        end: "2018",
      },
      {
        title: "EucFlux",
        tags: ["Private sector", "MAESPA", "eddy-covariance"],
        description:
          "Quantifying water, carbon, and mineral element fluxes in eucalyptus plantations.",
        logo: "./media/projects/eucflux.jpg",
        link: {
          label: "agritrop.fr",
          href: "https://agritrop.cirad.fr/589554/",
        },
        start: "2008",
        end: "2017",
      },
      {
        title: "MACACC",
        tags: ["ANR", "MAESPA", "DynACof"],
        description:
          "Adapting perennial plantations to global changes by studying agroforestry systems, economic willingness for adoption, and ecological resilience to climate changes.",
        logo: "./media/projects/macacc.jpg",
        link: {
          label: "umr-ecosols.fr",
          href: "https://www.umr-ecosols.fr/recherche/projets/projets-clos-avant-2020?view=article&id=46:maccac&catid=17:projets",
        },
        start: "2014",
        end: "2017",
    }
    ],
  };