// src/pages/Projetos.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projetos.css';

const projects = [
  {
    id: 1,
    name: { pt: "Cat's Cafeteria", en: "Cat's Cafeteria" },
    description: {
      pt: "Meu primeiro jogo lançado na Steam é um visual novel que aborda questões complexas da vida, integrando mistérios e dramas. O jogo também se destaca por sua charmosa arte em pixel, criando uma experiência visual encantadora.",
      en: "My first game released on Steam is a visual novel that addresses complex life issues, integrating mysteries and drama. The game also stands out for its charming pixel art, creating a delightful visual experience."
    },
    technologies: { pt: ["Python", "Desenvolvimento de jogos", "Pixel Art"], en: ["Python", "Game Development", "Pixel Art"] },
    image: "/Cats.png",
  },
  {
    id: 2,
    name: { pt: "NCU Site", en: "NCU Site" },
    description: { 
      pt: "O site da Nerd Cinematic Universe foi um projeto feito totalmente por mim com o intuito de divulgar os conteúdos da loja, além de melhorar minhas habilidades no desenvolvimento de projetos.", 
      en: "The Nerd Cinematic Universe website was a project entirely developed by me with the goal of promoting the store's content, as well as improving my skills in project development."
    },
    technologies: { pt: ["WordPress", "Desenvolvimento Web"], en: ["WordPress", "Web Development"] },
    image: "/NCU.jpg",
  },
  {
    id: 3,
    name: { pt: "Green Magic - Sistema", en: "Green Magic - System" },
    description: { 
      pt: "Para aprendizado, desenvolvi um sistema para uma loja ficticia, esse sistema permite o cadastro de clientes, produtos e vendas, além de trazer um pequeno dashboard no começo.", 
      en: "For learning purposes, I developed a system for a fictional store. This system allows the registration of customers, products, and sales, as well as featuring a small dashboard at the beginning."
    },
    technologies: { pt: ["ScriptCase", "PHP", "MySQL"], en: ["ScriptCase", "PHP", "MySQL"] },
    image: "/Green Magic.jpg",    
  },
  {
    id: 4,
    name: { pt: "Cadastro com API", en: "API Registration" },
    description: { 
      pt: "Desenvolvi uma API capaz de fazer os métodos de PUT, POST, GET e DELETE em uma base de dados de clientes. Também desenvolvi o front para tornar a aplicação funcional sem precisar utilizar apenas o Postman.", 
      en: "I developed an API capable of performing the PUT, POST, GET, and DELETE methods on a customer database. I also created the frontend to make the application functional without relying solely on Postman."
    },
    technologies: { pt: ["REACT", "MongoDB", "Prisma", "Node.js"], en: ["REACT", "MongoDB", "Prisma", "Node.js"] },
    image: "/api.jpg",      
  },
  {
    id: 5,
    name: { pt: "Mud Man", en: "Mud Man" },
    description: { 
      pt: "Minha primeira GameJam, com o tema 'Mistura de Gêneros', gerou esse jogo, que combina elementos de terror, plataforma e puzzle, transformando-se em um shooter no final. O jogo ficou na 45ª posição entre 74 participantes.", 
      en: "My first GameJam, with the theme 'Genre Mixing,' resulted in this game, which combines elements of horror, platforming, and puzzle, transforming into a shooter at the end. The game ranked 45th out of 74 participants."
    },
    technologies: { pt: ["Game Maker", "Desenvolvimento de jogos", "Pixel Art"], en: ["Game Maker", "Game Development", "Pixel Art"] },
    image: "/Mud.jpg",    
  },
  {
    id: 6,
    name: { pt: "Login Simples", en: "Simple Login" },
    description: { 
      pt: "Desenvolvi um sistema básico de cadastro e login em PHP para aprimorar minhas habilidades. O projeto inclui funcionalidades de criação, edição, exclusão e busca de usuários.", 
      en: "I developed a basic registration and login system in PHP to improve my skills. The project includes user creation, editing, deletion, and search functionalities."
    },
    technologies: { pt: ["MySQL", "PHP", "HTML", "Desenvolvimento WEB"], en: ["MySQL", "PHP", "HTML", "Web Development"] },
    image: "/login.jpg",    
  },
];

function Projetos() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="projetos-container">
      <header className="header">
        <div className="button-container">
          <Link to="/sobre">
            <button>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</button>
          </Link>
          <Link to="/">
            <button>{language === 'pt' ? 'Início' : 'Home'}</button>
          </Link>
          <Link to="/contato">
            <button>{language === 'pt' ? 'Contato' : 'Contact'}</button>
          </Link>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </header>

      {projects.map((project) => (
        <Link
          to={`/Projetos/${project.name.en.toLowerCase().replace(/ /g, '-')}`}
          key={project.id}
          className="project-card"
        >
          <img src={project.image} alt={project.name[language]} className="project-image" />
          <h3>{project.name[language]}</h3>
          <p>{project.description[language]}</p>
          <p><strong>{language === 'pt' ? 'Tecnologias:' : 'Technologies:'}</strong> {project.technologies[language].join(", ")}</p>
        </Link>
      ))}
    </div>
  );
}

export default Projetos;