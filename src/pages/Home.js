// src/pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="button-container">
          <Link to="/sobre">
            <button>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</button>
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

      <img
        src="/eu.jpg"
        alt="Foto de Pedro"
        className="profile-picture"
      />

      <div className="character-info">
        <h2>{language === 'pt' ? 'Ficha do Personagem' : 'Character Profile'}</h2>
        <p><strong>{language === 'pt' ? 'Nome:' : 'Name:'}</strong> Pedro Henrique de Souza Seabra Mattos Cordeiro</p>
        <p><strong>{language === 'pt' ? 'Profissão:' : 'Profession:'}</strong> {language === 'pt' ? 'Engenheiro da Computação / Programador de Jogos' : 'Computer Engineer / Game Developer'}</p>
        <p><strong>{language === 'pt' ? 'Idade:' : 'Age:'}</strong> 20 {language === 'pt' ? 'anos' : 'years old'}</p>
        <p><strong>{language === 'pt' ? 'Descrição:' : 'Description:'}</strong> {language === 'pt' ? 'Um profissional entusiasmado em busca de conhecimento e crescimento contínuo.' : 'An enthusiastic professional seeking knowledge and continuous growth.'}</p>
      </div>
    </div>
  );
}

export default Home;
