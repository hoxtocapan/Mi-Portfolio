import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import guitarLA from "@/public/guitarLA.png"
import carritoCompras from "@/public/carritoCompras.png";
import realState from "@/public/realState.png";
import portfolio from "@/public/potfolio.png"


export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre Mi",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Instituto Tecnológico Superior de Zacapoaxtla.",
    location: "Zacapoaxtla, Puebla",
    description:
      "Me gradué como ingeniero en informática.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Instituto de Compuingles de Oriente",
    location: "Puebla, Mexico",
    description:
      "Desarrollo de sistema web educativo para los planteles usando HTML, CSS, JavaScript, AJAX, PHP, asegurando una buena optimización del rendimiento del sitio web y diseños responsivos.",
    icon: React.createElement(CgWorkAlt),
    date: "Agosto 2022 - Presente",
  },
 
] as const;

export const projectsData = [
  {
    title: "GuitarLA",
    description: "Tienda de guitarras en Next.js, obteniendo datos desde Strapi con getStaticProps y  getServerSideProps.",
    tags: ["React", "Next.js", "Strapi", "PostgreSQL"],
    imageUrl: guitarLA,
    gitUrl: "https://github.com/hoxtocapan/GuitarLANext.js",
    liveUrl: "https://guitar-la-next-js-fawn.vercel.app/",
  },
  {
    title: "Carrito de compras",
    description:
      "Carrito de compras en Vue.js, utilizando Componentes, custom events, state, Props, Watch, Eventos, Emits.",
    tags: ["HTML", "Bootstrap", "Vue.js"],
    imageUrl: carritoCompras,
    gitUrl: "https://github.com/hoxtocapan/GuitarLA---Carrito-de-Compras-en-Vue.js",
    liveUrl: "https://lustrous-douhua-1f2cd0.netlify.app/",
  },
  {
    title: "Real State",
    description:
      "Template empresa de venta de casas, hecha con SASS, Gulp, Imágenes Webp y Avif y BEM.",
    tags: ["HTML", "SASS", "Gulp", "JavaScript"],
    imageUrl: realState,
    gitUrl: "https://github.com/hoxtocapan/Real--state",
    liveUrl: "https://tranquil-bubblegum-a90370.netlify.app/",
  },
  {
    title: "Portfolio",
    description:
      "Porfolio personal, en donde muestro alguno a mis proyecto.",
    tags: ["React", "Tailwind", "Next.js", "Framer Motion"],
    imageUrl: portfolio,
    gitUrl: "https://github.com/hoxtocapan/citas_react",
    liveUrl: "https://phenomenal-paletas-7a7455.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Sass",
  "Vue.js",
  "PHP",
  "Laravel",
  "MySql",
  "jQuery"
] as const;
