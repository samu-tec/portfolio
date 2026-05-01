export const projects = [
  {
    slug: "friends4you",
    name: "Friends4You",
    type: "Proyecto DAW",
    primaryLanguage: "PHP",
    updated: "Actualizado recientemente",
    status: "Proyecto DAW",
    description:
      "Aplicación web para conectar personas por ciudad, intereses compartidos y planes locales como quedadas o eventos.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/samu-tec/Friends4You",
    cta: "Ver repositorio",
    featured: true
  },
  {
    slug: "discord-rag-bot",
    name: "Discord-RAG-Bot",
    type: "Proyecto personal",
    primaryLanguage: "Python",
    license: "MIT",
    updated: "Actualizado recientemente",
    status: "Proyecto personal",
    description:
      "Bot RAG para Discord capaz de responder usando una base de conocimiento local con Ollama y ChromaDB.",
    technologies: ["Python", "discord.py", "ChromaDB", "Ollama", "RAG"],
    repoUrl: "https://github.com/samu-tec/Discord-RAG-Bot",
    cta: "Ver repositorio",
    featured: true
  },
  {
    slug: "pokeapi",
    name: "PokeAPI",
    type: "Práctica con API",
    primaryLanguage: "JavaScript",
    status: "Proyecto de práctica",
    description:
      "Proyecto web para practicar consumo de APIs, renderizado dinámico de datos y creación de interfaces interactivas.",
    technologies: ["HTML", "CSS", "JavaScript", "API REST"],
    repoUrl: "https://github.com/samu-tec/PokeAPI",
    cta: "Ver repositorio",
    featured: true
  },
  {
    slug: "portfolio-personal",
    name: "Portfolio personal",
    type: "Web personal",
    primaryLanguage: "HTML",
    status: "Activo",
    description:
      "Repositorio de esta web personal: sitio estático, responsive y fácil de mantener.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    repoUrl: "https://github.com/samu-tec/portfolio",
    cta: "Ver repositorio",
    featured: false
  }
];

export const repoProjects = projects.filter((project) => Boolean(project.repoUrl));
