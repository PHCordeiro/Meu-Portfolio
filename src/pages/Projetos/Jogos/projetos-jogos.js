// src/pages/ProjetosJogos.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projetos.css';

const projects = [
    {
      id: 1,
      name: { pt: "Cats Cafeteria", en: "Cats Cafeteria" },
      description: {
        pt: "Meu primeiro jogo lançado na Steam é um visual novel que aborda questões complexas da vida, integrando mistérios e dramas. O jogo também se destaca por sua charmosa arte em pixel, criando uma experiência visual encantadora.",
        en: "My first game released on Steam is a visual novel that addresses complex life issues, integrating mysteries and drama. The game also stands out for its charming pixel art, creating a delightful visual experience."
      },
      technologies: { pt: ["Python", "Desenvolvimento de jogos", "Pixel Art"], en: ["Python", "Game Development", "Pixel Art"] },
      image: "/Cats/Cats.png",
    },
    {
      id: 2,
      name: { pt: "Mud Man", en: "Mud Man" },
      description: { 
        pt: "Minha primeira GameJam, com o tema 'Mistura de Gêneros', gerou esse jogo, que combina elementos de terror, plataforma e puzzle, transformando-se em um shooter no final. O jogo ficou na 45ª posição entre 74 participantes.", 
        en: "My first GameJam, with the theme 'Genre Mixing,' resulted in this game, which combines elements of horror, platforming, and puzzle, transforming into a shooter at the end. The game ranked 45th out of 74 participants."
      },
      technologies: { pt: ["Game Maker", "Desenvolvimento de jogos", "Pixel Art"], en: ["Game Maker", "Game Development", "Pixel Art"] },
      image: "/Mud.jpg",    
    },
    {
      id: 3,
      name: { pt: "Pong Clone", en: "Pong Clone" },
      description: { 
        pt: "Este é um clone simples do jogo Pong, criado como um projeto de aprendizado no Unity, sendo o meu primeiro jogo feito com essa ferramenta apenas para prática.", 
        en: "This is a simple clone of the Pong game created as a learning project in Unity, my first game made with this tool just for practice. "
      },
      technologies: { pt: ["Unity", "Desenvolvimento de jogos"], en: ["Unity", "Game Development"] },
      image: "/PongClone/Pong.png",    
    },
    {
      id: 4,
      name: { pt: "Todou VS Mei Mei", en: "Todou VS Mei Mei" },
      description: { 
        pt: "A game inspired by the Pong match between Todou and Mei Mei, featured in an episode of the anime Jujutsu Kaisen, has been developed. ", 
        en: "Um jogo inspirado na partida de Pong entre Todou e Mei Mei, apresentada em um episódio do anime Jujutsu Kaisen, foi desenvolvido."
      },
      technologies: { pt: ["GameMaker", "Desenvolvimento de jogos"], en: ["GameMaker", "Game Development"] },
      image: "/TodouMeiMei/TodouMeiMei1.png",    
    },
  ];
  
  function ProjetosJogos() {
    const [language, setLanguage] = useState('pt');
  
    const toggleLanguage = () => {
      setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
    };
  
    return (
      <div className="projetos-container">
        <header className="header">
          <div className="button-container">
            <Link to="/">
              <button>{language === 'pt' ? 'Início' : 'Home'}</button>
            </Link>
            <Link to="/sobre">
              <button>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</button>
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
            to={`/Projetos/Jogos/${project.name.en.toLowerCase().replace(/ /g, '-')}`}
            key={project.id}
            className="project-card"
          >
            <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt={project.name[language]} className="project-image" />
            <h3>{project.name[language]}</h3>
            <p>{project.description[language]}</p>
            <p><strong>{language === 'pt' ? 'Tecnologias:' : 'Technologies:'}</strong> {project.technologies[language].join(", ")}</p>
          </Link>
        ))}
      </div>
    );
  }

export default ProjetosJogos;
