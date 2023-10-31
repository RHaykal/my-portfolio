"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Next.js Blog",
    description: "Blog from Next.js Learning Documentation",
    image: "/images/art1.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Express API with MYSQL Database",
    description: "CRUD and JWT Implementations for API Security",
    image: "/images/art2.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Stock Price Prediction",
    description: "Machine Learning Model for Price Prediction using SVR algorithm and it's kernel",
    image: "/images/art2.jpg",
    tag: ["All", "M.L"],
  },
  {
    id: 4,
    title: "Face Recognition Model for Browsers",
    description: "Developed a Face Recognition Model using JavaScript Library",
    image: "/images/art1.jpg",
    tag: ["All", "M.L", "Web"],
  },
  {
    id: 5,
    title: "Warbon Coffee Mobile Apps",
    description: "Mobile apps for Warbon Coffee Shop using Framework7 Core",
    image: "/images/art2.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Point Of Sales(POS) Apps ",
    description: "POS apps developed with Next.js and Go",
    image: "/images/art1.jpg",
    tag: ["Upcoming"],
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects" className="pt-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-wrap overflow-x-auto sm:flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="M.L"
          onClick={handleTagChange}
          isSelected={tag === "M.L"}
        />
        <ProjectTag
          name="Upcoming"
          onClick={handleTagChange}
          isSelected={tag === "Upcoming"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
