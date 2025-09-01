const RESUME_DATA = {
    given: "Rémi",
    family: "Vezy",
    initials: "RV",
    favicon: "./media/icons/favicon.ico",
    avatarUrl: "https://avatars.githubusercontent.com/u/12777793?v=4",
    personalWebsiteUrl: "https://remivezy.com",
    location: "Montpellier, France, UTC+2",
    locationLink: "https://www.google.com/maps/place/Montpellier",
    title: "Researcher in plant modelling",
    about: `Researcher in plant modelling <a href="https://amap.cirad.fr/en/index.php" class="underline hover:text-accent-foreground" >@UmrAmap</a>.`,
    summary: {
      first: `I specialize in plant growth modeling, predicting plant development and yield based on genotype, environment, and management (<strong>G×E×M</strong>). My work bridges <strong>ecophysiology, agronomy, and computational modeling</strong> to better understand plant function and architecture.`,
      second: `A key focus of my research is <strong>digital twins</strong> —virtual models that replicate real plant systems to test hypotheses, predict responses, and optimize management strategies. By integrating high-resolution data acquisition (<em>lidar, gas exchanges</em>...) with <a class="underline hover:text-accent-foreground" href="https://virtualplantlab.github.io/PlantSimEngine.jl/stable/">cutting-edge modeling frameworks</a>, I aim to make simulations both realistic and actionable.`,
      third: `Driven by a passion for sustainability and technology, I develop tools that enhance resource efficiency, improve yield, and strengthen resilience, ensuring that research translates into tangible benefits for growers and stakeholders.`,
    },
    contact: {
      email: "remi.vezy@cirad.fr",
      tel: "+33467614455",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/VEZY",
          icon: "./media/icons/github.svg"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/remivezy/",
          icon: "./media/icons/linkedin.svg"
        },
        {
          name: "X",
          url: "https://x.com/VezyRemi",
          icon: "./media/icons/x.svg"
        },
        {
          name: "ORCiD",
          url: "https://orcid.org/0000-0002-0808-1461",
          icon: "./media/icons/orcid.svg"
        },
        {
          name: "Scholar",
          url: "https://scholar.google.fr/citations?user=09R4xY0AAAAJ&hl",
          icon: "./media/icons/google-scholar.svg"
        },
        {
          name: "ResearchGate",
          url: "https://www.researchgate.net/profile/Remi-Vezy",
          icon: "./media/icons/researchgate.svg"
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
        contract: "Permanent position",
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
        contract: "Postdoc position",
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
        contract: "PhD",
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
        title: "Galileo",
        tags: [
          "EU Horizon",
          "7M€",
          "STICS",
          "lidar",
          "architecture",
        ],
        description: "Strengthening rural livelihoods and resilience to climate change in Africa: innovative agroforestry integrating people, trees, crops and livestock.",
        link: {
          label: "https://galileo-project.eu",
          href: "https://galileo-project.eu/",
        },
        logo: "./media/projects/galileo.jpeg",
        start: "2025",
        end: "2028",
      },
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
        logo: "./media/projects/palmstudio.jpg",
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
    software: [
      {
        title: "PlantSimEngine.jl",
        org: "VirtualPlantLab",
        tags: ["Julia", "FSPM", "simulation"],
        description: "Composable engine for Functional-Structural Plant Models in Julia.",
        link: {
          label: "github.com/VirtualPlantLab/PlantSimEngine.jl",
          href: "https://github.com/VirtualPlantLab/PlantSimEngine.jl"
        }
      },
      {
        title: "MultiScaleTreeGraph.jl",
        org: "VEZY",
        tags: ["Julia", "MTG", "architecture"],
        description: "Multi-scale tree graph data model and tools for plant architecture.",
        link: {
          label: "github.com/VEZY/MultiScaleTreeGraph.jl",
          href: "https://github.com/VEZY/MultiScaleTreeGraph.jl"
        }
      },
      {
        title: "PlantBiophysics.jl",
        org: "VEZY",
        tags: ["Julia", "biophysics", "canopy"],
        description: "Biophysical processes for plant and canopy modeling (radiation, gas exchange, energy).",
        link: {
          label: "github.com/VEZY/PlantBiophysics.jl",
          href: "https://github.com/VEZY/PlantBiophysics.jl"
        }
      },
      {
        title: "XPalm.jl",
        org: "PalmStudio",
        tags: ["Julia", "FSPM", "oil palm"],
        description: "Functional-structural plant model for oil palm (Elaeis guineensis).",
        link: {
          label: "github.com/PalmStudio/XPalm.jl",
          href: "https://github.com/PalmStudio/XPalm.jl"
        }
      },
      {
        title: "PlantGeom.jl",
        org: "VEZY",
        tags: ["Julia", "geometry", "3D"],
        description: "Utilities for 3D plant geometry and mesh/voxel workflows.",
        link: {
          label: "github.com/VEZY/PlantGeom.jl",
          href: "https://github.com/VEZY/PlantGeom.jl"
        }
      },
      {
        title: "PlantMeteo.jl",
        org: "PalmStudio",
        tags: ["Julia", "meteorology", "forcing"],
        description: "Meteorological utilities for plant modeling (forcing, gaps, transforms).",
        link: {
          label: "github.com/PalmStudio/PlantMeteo.jl",
          href: "https://github.com/PalmStudio/PlantMeteo.jl"
        }
      }
    ],
    students: [
      {given: "Yélognissè", family: "Agbohessou"},
      {given: "Alexis",family: "Bonnet"},
      {given: "Oriane", family: "Braud"},
      {given: "Moussa",family: "Diedhiou"},
      {given: "Mathilde",family: "Millan"},
      {given: "Valentin",family: "Torrelli"},
      {given: "Simon",family: "Treillou"},
      {given: "Sidy", family: "Sow"},
      {given: "Thomas", family: "Wibaux"},
    ],
};
