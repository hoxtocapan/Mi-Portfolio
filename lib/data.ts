import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import guitarLA from "@/public/guitarLA.png"
import carritoCompras from "@/public/carritoCompras.png";
import realState from "@/public/realState.png";
import portfolio from "@/public/potfolio.png"
import certificado01 from "@/public/certificado01.jpg"
import certificado02 from "@/public/certificado02.jpg"
import certificado03 from "@/public/certificado03.jpg"


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
    name: "Certificados",
    hash: "#certificates",
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
      "Desarrollo de sistema web educativo usando HTML, CSS, JavaScript, AJAX, PHP, asegurando una buena optimización del rendimiento del sitio web y diseños responsivos.",
    icon: React.createElement(CgWorkAlt),
    date: "Agosto 2022 - Febrero 2024",
  },
    {
    title: "Schnellecke Logistics, Unidad VWM",
    location: "Cuautlancingo, Puebla",
    description:
      "Mantengo y creo aplicaciones web para los procesos de logística del cliente (VWM). Utilizo .NET, SQL Server, HTML, CSS, Bootstrap, jQuery y JavaScript para desarrollar y optimizar aplicaciones, asegurando un rendimiento eficiente. Colaboro con el equipo de logística y otros departamentos para traducir los requisitos del cliente en soluciones técnicas, y participo en reuniones de planificación para alinear los proyectos con los objetivos del cliente.",
    icon: React.createElement(CgWorkAlt),
    date: "Febrero 2024 - Presente",
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
    title: "Portafolio",
    description:
      "Portafolio personal, en donde muestro alguno a mis proyectos, habilidades y más información acerca de mí.",
    tags: ["React", "Tailwind", "Next.js", "Framer Motion"],
    imageUrl: portfolio,
    gitUrl: "https://github.com/hoxtocapan/Mi-Portfolio",
    liveUrl: "https://mi-portfolio-mocha.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "Git",
  "Tailwind",
  "Sass",
  "PHP",
  "Laravel",
  "MySql",
  "jQuery",
  "C#",
  ".NET",
  "SqlServer"
  
] as const;

export const certificatesData = [
  { imageUrl:certificado01},
  { imageUrl:certificado02},
  { imageUrl:certificado03},


] as const;
