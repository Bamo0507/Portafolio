const projects = [
  {
    id: "tripup",
    title: "TripUp",
    repository: "https://github.com/Bamo0507/TripUP",
    description:
      "Plan and explore trips by category or country, and generate itineraries with day-based planning.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Datastore", "SQLite"],
    imgLocation: "/Portafolio/images/mobile/TripUp.png",
    usability:
      "Users can explore categorized destinations (Hotels, Restaurants, Drinks, Activities), search by country, create multi-day itineraries via form inputs, and view each day as a separate plan card. Users stay signed in thanks to Datastore handling authentication persistence.",
  },
  {
    id: "rickandmorty",
    title: "RickAndMorty",
    repository: "https://github.com/Bamo0507/RickYMorty",
    description:
      "Explore characters and locations from the Rick and Morty API with offline fallback.",
    tech: ["Jetpack Compose", "Ktor", "Room", "Datastore", "SQLite"],
    imgLocation: "/Portafolio/images/mobile/RickYMorty.png",
    usability:
      "The app fetches lists of characters and locations. Users can tap entries to view detailed info. If online fetch fails, cached local Room data is used. Datastore keeps users logged in.",
  },
  {
    id: "mealmap",
    title: "MealMap",
    repository: "https://github.com/Bamo0507/RecipeApp",
    description:
      "Organize and filter your personal recipe collection with local persistence and image uploads.",
    tech: ["Jetpack Compose", "Room", "Datastore", "SQLite"],
    imgLocation: "/Portafolio/images/mobile/MealMap.png",
    usability:
      "Users can add, view, filter (by prep time or favorites), and store recipes with title, description, and time fields. Images can be uploaded from the device gallery.",
  },
  {
    id: "coffeeweb",
    title: "CoffeeWeb",
    repository: "https://github.com/Bamo0507/CoffeeShop",
    description:
      "A responsive fictional landing page for a coffee shop with full layout: menu, gallery, testimonials, and contact form.",
    tech: ["HTML", "CSS", "Javascript"],
    imgLocation: "/Portafolio/images/web/CoffeeWeb.png",
    usability:
      "Fully responsive design featuring anchor-based navigation, client-side transitions, and content sections optimized for readability across devices.",
  },
  {
    id: "report-system",
    title: "Inventory Report System",
    repository: "https://github.com/Bamo0507/SistemaReportes",
    description:
      "Generate and visualize sales and inventory reports with a full backend and frontend integration.",
    tech: ["Express.js", "PostgreSQL", "React"],
    imgLocation: "/Portafolio/images/web/ReportesVentas.png",
    usability:
      "Users can view summarized sales and inventory reports, query dynamic filters, and manage data via a frontend dashboard powered by REST endpoints.",
  },
  {
    id: "bb8animation",
    title: "BB8 Animation",
    repository: "https://github.com/Bamo0507/BB8_CSS",
    description:
      "A pure CSS animated BB8 character built for fun and experimentation.",
    tech: ["CSS"],
    imgLocation: "/Portafolio/images/web/BB8.png",
    usability:
      "BB8's movement and expression are animated entirely with CSS, showcasing creative use of keyframes and transitions.",
  },
  {
    id: "calculadora",
    title: "Calculadora Retro",
    repository: "https://github.com/Bamo0507/Calculadora",
    description:
      "A retro-style calculator with basic arithmetic operations.",
    tech: ["React", "Tailwind", "JavaScript", "HTML", "CSS", "Docker"],
    imgLocation: "/Portafolio/images/web/Calculadora.png",
    usability:
      "A responsive calculator built with React and Tailwind, featuring basic arithmetic operations.",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    repository: "https://github.com/Bamo0507/CRUD_TaskManager",
    description:
      "A simple task manager application for creating, updating, and deleting tasks.",
    tech: ["React", "Tailwind", "JavaScript", "HTML", "CSS", "Docker", "Node.js", "Express", "PostgreSQL", "TypeORM"],
    imgLocation: "/Portafolio/images/web/TaskManager.png",
    usability:
      "A task manager application built with React and Tailwind, showcasing CRUD operations with Node.js and PostgreSQL."
  },
  {
    id: "juego-memoria",
    title: "Memory Game",
    description:
      "A simple one player memory game built with React",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    imgLocation: "/Portafolio/images/web/Memoria.png",
    usability:
      "A simple memory game built with React, showcasing event handling and state management."
  }
];

export default projects;

