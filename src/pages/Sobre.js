// src/pages/Sobre.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sobre.css';

function Sobre() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="sobre-container">
      <header className="header">
        <div className="button-container">
          <Link to="/">
            <button>{language === 'pt' ? 'Início' : 'Home'}</button>
          </Link>
          <Link to="/projetos">
            <button>{language === 'pt' ? 'Projetos' : 'Projects'}</button>
          </Link>
          <Link to="/contato">
            <button>{language === 'pt' ? 'Contato' : 'Contact'}</button>
          </Link>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </header>

      <h2>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</h2>
      <p>
        {language === 'pt'
          ? 'Desde pequeno, eu tive um sonho: criar o meu próprio universo! Inspirado por grandes obras como as de Tolkien, Star Wars e outras, me interessei pela arte de escrever histórias. Mas algo faltava... o componente visual!'
          : 'Since I was young, I had a dream: to create my own universe! Inspired by great works such as Tolkien, Star Wars, and others, I became interested in the art of storytelling. But something was missing... the visual component!'}
      </p>
      <p>
        {language === 'pt'
          ? 'Para resolver esse problema, busquei criar meu mundo por meio dos jogos. Foi então que decidi entrar na área de computação e, rapidamente, me apaixonei pela tecnologia. Com isso, escolhi cursar Engenharia da Computação no Instituto Federal Fluminense e, desde então, venho me dedicando cada vez mais a me tornar um ótimo profissional.'
          : 'To solve this problem, I sought to create my world through games. That’s when I decided to enter the computing field, and I quickly fell in love with technology. Thus, I chose to study Computer Engineering at the Instituto Federal Fluminense, and since then, I have been increasingly dedicated to becoming an excellent professional.'}
      </p>
      <p>
        {language === 'pt'
          ? 'Os meus jogos me acompanham nessa jornada. Eles não apenas me ajudam a realizar meu sonho, mas também a desenvolver minhas habilidades como engenheiro.'
          : 'My games accompany me on this journey. They not only help me achieve my dream but also develop my skills as an engineer.'}
      </p>
    </div>
  );
}

export default Sobre;
