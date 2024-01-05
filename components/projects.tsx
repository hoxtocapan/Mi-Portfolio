"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Proyectos", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 container mx-auto">
      <SectionHeading>Mis Proyectos</SectionHeading>
      <div className="grid xl:max-w-[90%] mx-auto xl:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
