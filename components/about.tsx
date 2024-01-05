"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre Mi");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-7 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre Mi</SectionHeading>

      <p className="mb-3">¡Hola! Soy un ingeniero informático apasionado por el fascinante mundo del desarrollo web. Mi entusiasmo radica en mantenerme siempre actualizado con las últimas tendencias y tecnologías en este campo dinámico, asegurándome de que mis proyectos reflejen las mejores prácticas y ofrezcan soluciones de vanguardia.</p>
      <p className="mb-3">Más allá de mi sólida base técnica, destaco por mi compromiso con la colaboración y la comunicación efectiva. Creo firmemente en el valor del trabajo en equipo para alcanzar resultados excepcionales. Mi objetivo es contribuir al éxito de cada proyecto mediante la combinación de conocimientos técnicos con un enfoque proactivo y una actitud positiva.</p>
      <p>A través de mi portfolio, te invito a explorar algunos de los proyectos que han definido mi trayectoria.</p>
      <p className="font-bold">¡Bienvenido a mi mundo digital!</p>
    </motion.section>
  );
}
