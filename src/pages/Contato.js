// src/pages/Contato.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contato.css';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';

function Contato() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="contato-container">
      <header className="header">
        <div className="button-container">
          <Link to="/">
            <button>{language === 'pt' ? 'Início' : 'Home'}</button>
          </Link>
          <Link to="/sobre">
            <button>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</button>
          </Link>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </header>

      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="logo" />

      <h2>{language === 'pt' ? 'Mechanical Brain' : 'Mechanical Brain'}</h2>
      <p>{language === 'pt' ? 'Entre em contato comigo através das plataformas abaixo:' : 'Get in touch with me through the platforms below:'}</p>
      
      <div className="contact-icons">
        <a href="mailto:mechanicalbraingames@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
          <span>{language === 'pt' ? 'Email' : 'Email'}</span>
        </a>
        <a href="https://www.instagram.com/pedro_h.cordeiro/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
          <span>{language === 'pt' ? 'Instagram Pessoal' : 'Personal Instagram'}</span>
        </a>
        <a href="https://www.instagram.com/77pedro_mattos/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
          <span>{language === 'pt' ? 'Instagram Profissional' : 'Professional Instagram'}</span>
        </a>
      </div>
    </div>
  );
}

export default Contato;
