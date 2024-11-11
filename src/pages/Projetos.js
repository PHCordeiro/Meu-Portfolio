// src/pages/Projetos.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Projetos.css';

const projects = [
  {
    id: 1,
    name: "Projeto 1",
    description: "Uma breve descrição do projeto 1.",
    technologies: ["React", "Node.js", "CSS"],
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Projeto 2",
    description: "Uma breve descrição do projeto 2.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Projeto 3",
    description: "Uma breve descrição do projeto 3.",
    technologies: ["Python", "Django"],
    image: "/path/to/image3.jpg",
  },
  {
    id: 4,
    name: "Projeto 4",
    description: "Uma breve descrição do projeto 4.",
    technologies: ["Java", "Spring Boot"],
    image: "/path/to/image4.jpg",
  },
  {
    id: 5,
    name: "Projeto 5",
    description: "Uma breve descrição do projeto 5.",
    technologies: ["React", "Express", "MongoDB"],
    image: "/path/to/image5.jpg",
  },
  {
    id: 6,
    name: "Projeto 6",
    description: "Uma breve descrição do projeto 6.",
    technologies: ["C#", ".NET", "SQL"],
    image: "/path/to/image6.jpg",
  },
];

function Projetos() {
  return (
    <div className="projetos-container">
      {projects.map((project) => (
        <Link to={`/projeto/${project.id}`} key={project.id} className="project-card">
          <img src={project.image} alt={project.name} className="project-image" />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Tecnologias:</strong> {project.technologies.join(", ")}</p>
        </Link>
      ))}
    </div>
  );
}

export default Projetos;
