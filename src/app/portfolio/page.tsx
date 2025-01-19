"use client";
import { Fade } from "react-awesome-reveal";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectData {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  codepen: string;
}

const projectData: ProjectData[] = [
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

const uniqueCategories: string[] = [
  "all projects",
  ...Array.from(new Set(projectData.map((item) => item.category))),
];

const Portfolio: React.FC = () => {
  const [categories, setCategories] = useState<string[]>(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Portfolio
          </h2>
        </Fade>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <Fade
            direction="up"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <TabsList
              className="w-full grid h-full md:grid-cols-5
          lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none"
            >
              {categories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={category}
                  onClick={() => setCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Fade>

          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Fade
              direction="up"
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {filteredProjects.map((project: any, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                );
              })}
            </Fade>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
