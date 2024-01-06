"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificatesData } from "@/lib/data";
import Certifica from "./certificate"
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Certificados", 0.5);

  return (
    <section ref={ref} id="certificates" className="scroll-mt-28 mb-28 container mx-auto">
      <SectionHeading>Mis Certificados</SectionHeading>
      <div className="grid xl:max-w-[90%] mx-auto xl:grid-cols-3 gap-4">
        {certificatesData.map((project, index) => (
          <React.Fragment key={index}>
            <Certifica {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
