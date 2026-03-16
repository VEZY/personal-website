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
    seoDescription:
      "Researcher in plant modelling at AMAP lab, coordinating FSPM research, contributing to STICS, and developing digital twins and software for crops and agroforestry systems.",
    headline: [
      "Researcher in plant modelling at ",
      { text: "AMAP lab", href: "https://amap.cirad.fr/en/index.php" },
      ".",
    ],
    summary: [
      [
        "I work at the intersection of ",
        { text: "ecophysiology, agronomy and computational modelling", strong: true },
        " to understand how complex plant systems behave across scales. My research focuses on multiscale digital twins that connect plant architecture, biophysics and agronomy to explain development, performance and resilience.",
      ],
      [
        "I also coordinate the FSPM research theme at AMAP, co-lead the ",
        { text: "STICS", href: "https://stics.inrae.fr/eng/" },
        " Working Group on Testing, Evaluation and Calibration, and oversee intercropping-related developments in STICS.",
      ],
      [
        "My current work spans oil palm, cacao, Sahelian agroforestry systems and intercrops. I combine lidar, imaging, gas exchange and microclimate data with simulation, and I build much of the required tooling in Julia, alongside R and Fortran when needed.",
      ],
    ],
    currentFocusTitle: "Current Focus",
    currentFocus: [
      "Working on methods and tools to discover the general principles governing complex systems for optimizing their design and management.",
      "Developing digital twins, lidar-based trait extraction workflows and open-source Julia tools for multiscale plant modelling.",
      "Advancing model evaluation and calibration pipelines for STICS and functional-structural plant models.",
      "Advising PhD students (currently x2) and leading or contributing to European and international projects on crops, agroforestry and climate resilience.",
    ],
    serviceTitle: "Scientific Responsibilities",
    service: [
      {
        title: [
          "Coordinator of the ",
          { text: "FSPM research theme", href: "https://amap.cirad.fr/en/index.php" },
        ],
        organization: "AMAP lab",
        description:
          "I coordinate the Functional-Structural Plant Modelling research theme at AMAP.",
      },
      {
        title: [
          "Co-leader of the ",
          { text: "STICS", href: "https://stics.inrae.fr/eng/" },
          " Working Group on Testing, Evaluation and Calibration",
        ],
        organization: "STICS",
        description:
          "I co-lead the working group dedicated to testing, evaluation and calibration within the STICS community.",
      },
      {
        title: [
          "Intercropping referee for ",
          { text: "STICS", href: "https://stics.inrae.fr/eng/" },
        ],
        organization: "STICS",
        description:
          "I oversee intercropping-related developments in STICS, a widely used soil-crop model.",
      }, 
      {
        title: [
          "Member of the ",
          { text: "MACS4Plants network", href: "https://macs4plants.cirad.fr/" },
        ],
        organization: "CIRAD",
        description:
          "I contribute to the Mathematics and Computer Science for Plant Sciences network.",
      },
    ],
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
        link: "https://www.inrae.fr/en",
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
        title: "TreeD-RESIST",
        tags: [
          "PEPR AgroEcoNum",
          "2.9M€",
          "AI",
          "3D phenotyping",
          "orchards",
        ],
        logo: "./media/projects/treed-resist.png",
        description:
          "AI-driven 3D phenotyping and modelling to predict immunity and resilience in agroecological orchards.",
        role: "Participant",
        workPackage: "2",
        contribution: "Contribution to the digital phenotyping workflow for fruit trees, with expertise in 3D modelling, structural analysis, and trait extraction for agroecological orchard systems.",
        link: {
          label: "pepr-agroeconum.fr",
          href: "https://www.pepr-agroeconum.fr/eng/",
        },
        start: "2025",
        end: "2030",
      },
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
        role: "Participant",
        workPackage: "6",
        referee: true,
        contribution: "Extraction of traits from lidar pointclouds for model calibration and validation; Developing STICS for coupling with tree models.",
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
            referee: true,
            workPackage: "4",
            // task: "4.1",
            contribution: "Co-advisor of Oriane Braud's PhD.",
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
        role: "Participant",
        contribution: "Co-advisor of Thomas Wibaux's PhD. Assistance on the plant architecture and ecophysiology measurement protocols. MTG computations.",
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
        role: "PI",
        contribution: "Project management and coordination. Primary developer of the modeling pipeline and measurements acquisitions (whole-plant flux chamber...).",
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
        role: "Participant",
        referee: true,
        contribution: "Cirad advisor of the PhD of Moussa Diedhiou. Expertise on lidar data processing and analysis; plant architecture measurements and computations.",
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
        description: "Modelling framework for Plants in Julia (crop and FSP models).",
        docs: {
          label: "virtualplantlab.github.io/PlantSimEngine.jl",
          href: "https://virtualplantlab.github.io/PlantSimEngine.jl/stable/"
        },
        repo: {
          label: "github.com/VirtualPlantLab/PlantSimEngine.jl",
          href: "https://github.com/VirtualPlantLab/PlantSimEngine.jl"
        }
      },
      {
        title: "MultiScaleTreeGraph.jl",
        org: "VEZY",
        tags: ["Julia", "MTG", "architecture"],
        description: "Multi-scale tree graph data model and tools for plant architecture.",
        docs: {
          label: "vezy.github.io/MultiScaleTreeGraph.jl",
          href: "https://vezy.github.io/MultiScaleTreeGraph.jl/stable/"
        },
        repo: {
          label: "github.com/VEZY/MultiScaleTreeGraph.jl",
          href: "https://github.com/VEZY/MultiScaleTreeGraph.jl"
        }
      },
      {
        title: "PlantBiophysics.jl",
        org: "VEZY",
        tags: ["Julia", "biophysics", "leaf", "canopy"],
        description: "Calibration and simulation of biophysical processes (photosynthesis, conductance, energy balance...)",
        docs: {
          label: "vezy.github.io/PlantBiophysics.jl",
          href: "https://vezy.github.io/PlantBiophysics.jl/stable/"
        },
        repo: {
          label: "github.com/VEZY/PlantBiophysics.jl",
          href: "https://github.com/VEZY/PlantBiophysics.jl"
        }
      },
      {
        title: "XPalm.jl",
        org: "PalmStudio",
        tags: ["Julia", "FSPM", "oil palm"],
        description: "Functional-structural plant model for oil palm (Elaeis guineensis).",
        docs: {
          label: "palmstudio.github.io/XPalm.jl",
          href: "https://palmstudio.github.io/XPalm.jl/stable/"
        },
        repo: {
          label: "github.com/PalmStudio/XPalm.jl",
          href: "https://github.com/PalmStudio/XPalm.jl"
        }
      },
      {
        title: "PlantGeom.jl",
        org: "VEZY",
        tags: ["Julia", "geometry", "3D"],
        description: "Everything 3D for plants 🌱.",
        docs: {
          label: "vezy.github.io/PlantGeom.jl",
          href: "https://vezy.github.io/PlantGeom.jl/stable/"
        },
        repo: {
          label: "github.com/VEZY/PlantGeom.jl",
          href: "https://github.com/VEZY/PlantGeom.jl"
        }
      },
      {
        title: "PlantMeteo.jl",
        org: "PalmStudio",
        tags: ["Julia", "meteorology"],
        description: "Meteorological utilities for plant modeling (efficient data structures, pre-computations, database queries...).",
        docs: {
          label: "palmstudio.github.io/PlantMeteo.jl",
          href: "https://palmstudio.github.io/PlantMeteo.jl/stable/"
        },
        repo: {
          label: "github.com/PalmStudio/PlantMeteo.jl",
          href: "https://github.com/PalmStudio/PlantMeteo.jl"
        }
      },
      {
        title: "STICS",
        org: "INRAE",
        tags: ["Crop model", "FORTRAN", "R interface"],
        description: "Soil–crop model to simulate crop growth, soil water and nitrogen dynamics; widely used in research and applications.",
        docs: {
          label: "stics.inrae.fr",
          href: "https://stics.inrae.fr/"
        },
        repo: {
          label: "forge.inrae.fr/stics-dev/modulostics",
          href: "https://forge.inrae.fr/stics-dev/modulostics"
        }
      },
      {
        title: "SticsRPacks",
        org: "INRAE",
        tags: ["R", "STICS", "interface"],
        description: "R packages to run, parameterize, and analyze STICS model simulations.",
        docs: {
          label: "sticsrpacks.github.io/SticsRPacks",
          href: "https://sticsrpacks.github.io/SticsRPacks/"
        },
        repo: {
          label: "github.com/SticsRPacks/SticsRPacks",
          href: "https://github.com/SticsRPacks/SticsRPacks"
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
      {given: "Antonio Jesús", family: "Ariza-Salamanca"},
    ],
};
