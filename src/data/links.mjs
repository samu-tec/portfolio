import { profile } from "./profile.mjs";
import { projects } from "./projects.mjs";

const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

export const linkGroups = [
  {
    title: "Principal",
    items: [
      {
        label: "Proyectos",
        description: "Repositorios y trabajos destacados",
        href: "/proyectos/",
        kind: "internal",
        icon: "grid"
      },
      {
        label: "CV",
        description: "Perfil profesional en formato web",
        href: "/cv/",
        kind: "internal",
        icon: "file"
      },
      {
        label: "Email",
        description: profile.email,
        href: `mailto:${profile.email}`,
        kind: "direct",
        icon: "mail"
      }
    ]
  },
  {
    title: "Perfiles",
    items: [
      {
        label: "GitHub",
        description: "samu-tec",
        href: profile.github,
        kind: "external",
        icon: "github"
      },
      {
        label: "LinkedIn",
        description: "samuelciocan",
        href: profile.linkedin,
        kind: "external",
        icon: "linkedin"
      },
      {
        label: "Telegram",
        description: "Samu_Tech",
        href: profile.telegram,
        kind: "external",
        icon: "send"
      },
      {
        label: "Instagram",
        description: "samu_tech",
        href: profile.instagram,
        kind: "external",
        icon: "camera"
      },
      {
        label: "X",
        description: "samu_tech",
        href: profile.x,
        kind: "external",
        icon: "x"
      }
    ]
  },
  {
    title: "Repositorios",
    items: [
      {
        label: "Friends4You",
        description: projectBySlug.friends4you.status,
        href: projectBySlug.friends4you.repoUrl,
        kind: "external",
        icon: "users"
      },
      {
        label: "Discord-RAG-Bot",
        description: "Bot RAG para Discord",
        href: projectBySlug["discord-rag-bot"].repoUrl,
        kind: "external",
        icon: "bot"
      },
      {
        label: "PokeAPI",
        description: projectBySlug.pokeapi.status,
        href: projectBySlug.pokeapi.repoUrl,
        kind: "external",
        icon: "code"
      },
      {
        label: "Portfolio personal",
        description: "Repositorio de esta web",
        href: projectBySlug["portfolio-personal"].repoUrl,
        kind: "external",
        icon: "spark"
      }
    ]
  }
];
