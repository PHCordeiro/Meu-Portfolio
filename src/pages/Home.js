// src/pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  const birthDate = new Date('2004-08-02'); 
  const today = new Date();

  const ageInMilliseconds = today - birthDate;
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  const daysInYear = (1000 * 60 * 60 * 24 * 365.25);
  const remainingDays = Math.floor((ageInMilliseconds % daysInYear) / (1000 * 60 * 60 * 24));

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="button-container">
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

      {/* Home Container */}
      <div className="home-container">
        <img
          src={`${process.env.PUBLIC_URL}/eu.jpg`}
          alt="Foto de Pedro"
          className="profile-picture"
        />

        <div className="character-info">
          <h2>{language === 'pt' ? 'Ficha do Personagem' : 'Character Profile'}</h2>
          <p>
            <strong>{language === 'pt' ? 'Nome:' : 'Name:'}</strong> Pedro Henrique de Souza Seabra Mattos Cordeiro
          </p>
          <p>
            <strong>{language === 'pt' ? 'Profissão:' : 'Profession:'}</strong>{' '}
            {language === 'pt' ? 'Engenheiro da Computação / Programador de Jogos' : 'Computer Engineer / Game Developer'}
          </p>
          <p>
            <strong>{language === 'pt' ? 'Descrição:' : 'Description:'}</strong>{' '}
            {language === 'pt' ? 'Um profissional entusiasmado em busca de conhecimento e crescimento contínuo.' : 'An enthusiastic professional seeking knowledge and continuous growth.'}
          </p>
          <p>
            <strong>{language === 'pt' ? 'Idade:' : 'Age:'}</strong>{' '}
            {language === 'pt'
              ? `${ageInYears} anos e ${remainingDays} dias`
              : `${ageInYears} years and ${remainingDays} days`}
          </p>
        </div>

        <div className="projects-section">
          <Link to="/projetos-jogos" className="central-button">
            <button>{language === 'pt' ? 'Projetos de Jogos' : 'Game Projects'}</button>
          </Link>
          <Link to="/projetos-programas" className="central-button">
            <button>{language === 'pt' ? 'Programas' : 'Programs'}</button>
          </Link>
        </div>
        <div className="carreira">
          <Link to="/Experiencias/Experiencias" className="central-button">
            <button>{language === 'pt' ? 'Experiências' : 'Experiences'}</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
