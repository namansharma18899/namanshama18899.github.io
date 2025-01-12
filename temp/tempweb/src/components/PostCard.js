import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/3">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-2/3 p-6">
        <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
        <p className="mt-2 text-gray-600">{project.description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-green-100 text-green-600 font-medium py-1 px-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-indigo-400 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium"
            >
              Live Demo     🔗
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 border border-blue-500 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium"
            >
              View Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const PostCard = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URLs
      title: "Lets Type",
      description:
        "Lets Type is a sleek and efficient terminal-based typing speed calculator built with Python. Elevate your typing skills and track your progress with this interactive and user-friendly tool.",
      tags: ["Python", "colorama"],
      demo: "#",
      source: "https://github.com/namansharma18899/lets-type",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Dharma",
      description: "The world might not need a 1v1 arcade game in earnest but I might....",
      tags: ["html","css"],
      demo: "#",
      source: "https://github.com/namansharma18899/Dharma",
    },
  ];

  return (
    <div className="py-16">
      <h1 className="text-2xl text-gray-500 text-center  mb-10">
        Projects
      </h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
