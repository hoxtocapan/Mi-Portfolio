"use client";

import { useRef } from "react";
import { certificatesData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";


type ProjectProps = (typeof certificatesData)[number];

export default function certificate({imageUrl}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="bg-gray-100 max-w-[42rem] mx-auto border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
         
        />
      </div>
    </motion.div>
  );
}
