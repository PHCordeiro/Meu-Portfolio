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
      technologies: { pt: ["Game Maker", "Desenvolvimento de jogos", "Pixel Art", "GameJam"], en: ["Game Maker", "Game Development", "Pixel Art", "GameJam"] },
      image: "/Mud.jpg",    
    },
    {
      id: 3,
      name: { pt: "Politics - Stop the Assembleia", en: "Politics - Stop the Assembleia" },
      description: { 
        pt: "No Politics, o jogador se vê em um mundo injusto com um governo corrupto que visa arrecadar o máximo possível de dinheiro  da forma que for preciso. Com isso, afim de acabar com toda essa situação, o jogador precisa invadir o Congresso e derrotar todos os políticos que lá estão. Está pronto para quebrar literalmente todas as regras do seu país??!", 
        en: ""
      },
      technologies: { pt: ["GameMaker", "Desenvolvimento de jogos", "GameJam"], en: ["GameMaker", "Game Development", "GameJam"] },
      image: "/Politics/Politics1.png",    
    },
    {
      id: 4,
      name: { pt: "Tap Gojo", en: "Tap Gojo" },
      description: { 
        pt: "Este jogo é inspirado no anime 'Jujutsu Kaisen', criado pelo sensei Gege Akutami. É o meu anime favorito, então decidi desenvolver um jogo baseado nele.", 
        en: "This game is inspired by the anime 'Jujutsu Kaisen' created by Gege Akutami sensei. It's my favorite anime, so I've decided to develop a game based on it."
      },
      technologies: { pt: ["GameMaker", "Desenvolvimento de jogos", "Pixel Art"], en: ["GameMaker", "Game Development", "Pixel Art"] },
      image: "/TapGojo/TapGojo1.png",    
    },
    {
      id: 5,
      name: { pt: "Jogo dos Pássaros", en: "Bird Game" },
      description: { 
        pt: "O Jogo dos Pássaros foi feito para testar as minhas habilidades e gerar mais conhecimento sobre a criação de jogos. Sou muito grato com o NoNe por ter me ensinado tanto e espero que vocês se divirtam!", 
        en: "The Bird Game was made to test my skills and gain more knowledge about game development. I am very grateful to NoNe for teaching me so much, and I hope you all have fun!"
      },
      technologies: { pt: ["GameMaker", "Desenvolvimento de jogos"], en: ["GameMaker", "Game Development"] },
      image: "/Passaros/Passaros1.png",    
    },
    {
      id: 6,
      name: { pt: "Flappy Nishimiya", en: "Flappy Nishimiya" },
      description: { 
        pt: "Bem, como sou um grande fã de Jujutsu Kaisen, pensei em fazer um jogo sobre o anime, mas não sabia em que personagem ou aspecto me concentrar... Foi então que, ao olhar uma lista de personagens do anime, vi a Nishimiya e me lembrei de que ela voa em sua vassoura! Sabendo que muitas pessoas gostam da personagem, mas que ela não teve muito desenvolvimento, decidi criar um jogo pequeno e bem simples sobre ela.", 
        en: "Well, as I'm a huge fan of Jujutsu Kaisen, I thought about making a game about the anime, but I didn't know what to focus on... That's when, looking at a list of characters from the anime, I saw Nishimiya and remembered that she flies on her broomstick!! Knowing that many people like the character, but she didn't have much development, I decided to make a small, very simple game about her."
      },
      technologies: { pt: ["GameMaker", "Desenvolvimento de jogos"], en: ["GameMaker", "Game Development"] },
      image: "/Nishimiya/Nishimiya1.png",    
    },
    {
      id: 7,
      name: { pt: "Todou VS Mei Mei", en: "Todou VS Mei Mei" },
      description: { 
        pt: "A game inspired by the Pong match between Todou and Mei Mei, featured in an episode of the anime Jujutsu Kaisen, has been developed. ", 
        en: "Um jogo inspirado na partida de Pong entre Todou e Mei Mei, apresentada em um episódio do anime Jujutsu Kaisen, foi desenvolvido."
      },
      technologies: { pt: ["Unity", "Desenvolvimento de jogos"], en: ["Unity", "Game Development"] },
      image: "/TodouMeiMei/TodouMeiMei1.png",    
    },
    {
      id: 8,
      name: { pt: "Pong Clone", en: "Pong Clone" },
      description: { 
        pt: "Este é um clone simples do jogo Pong, criado como um projeto de aprendizado no Unity, sendo o meu primeiro jogo feito com essa ferramenta apenas para prática.", 
        en: "This is a simple clone of the Pong game created as a learning project in Unity, my first game made with this tool just for practice. "
      },
      technologies: { pt: ["Unity", "Desenvolvimento de jogos"], en: ["Unity", "Game Development"] },
      image: "/PongClone/Pong.png",    
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
