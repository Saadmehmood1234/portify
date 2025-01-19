"use client";
import { Fade } from "react-awesome-reveal";
import React from "react";
import ProjectCard from "./ProjectCard";
const projectData = [
  {
    image: "/work/3.png",
    category: "Portraits",
    name: "February 11,2024",
    description:
      "This is my description for category 1 which will be added later",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/5.png",
    category: "Models",
    name: "April 22,2023",
    description:
      "This is my description for category 1 which will be added later",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/6.png",
    category: "Places",
    name: "November 09,2023",
    description:
      "This is my description for category 1 which will be added later",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/7.png",
    category: "Corporate",
    name: "January 01,2024",
    description:
      "This is my description for category 1 which will be added later",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/8.png",
    category: "Fashion",
    name: "February 16,2022",
    description:
      "This is my description for category 1 which will be added later",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/9.png",
    category: "Fashion",
    name: "March 18,2023",
    description:
      "This is my description for category 1 which will be added later",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/10.png",
    category: "Corporate",
    name: "August 14,2024",
    description:
      "This is my description for category 1 which will be added later",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/3.png",
    category: "Models",
    name: "June 27,2023",
    description:
      "This is my description for category 1 which will be added later",
    link: "/",
    codepen: "/",
  },
];
const Gallery = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Gallery
          </h2>
        </Fade>

        <div className="flex gap-4 justify-center items-center w-full flex-wrap">
          <Fade
            direction="up"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {projectData.map((project: any) => {
              return <ProjectCard project={project} />;
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
