import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Experiencias.css';

function Experiencias() {
  const [language, setLanguage] = useState('pt');
  const [expanded, setExpanded] = useState(null);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  const experiences = [
    {
      yearPt: 'Outubro 2024 - O Momento',
      yearEn: 'October 2024 - Present',
      cargoPt: 'Assessor de Projetos',
      cargoEn: 'Project Advisor',
      descriptionPt: 'Aurea Soluções e Projetos',
      descriptionEn: 'Aurea Solutions and Projects',
      detailsPt: 'Atualmente, atuo como Assessor de Projetos na Empresa Júnior Áurea, integrando a equipe de projetos. Nesse papel, serei responsável pelo desenvolvimento de diversos projetos na área de computação, iniciando com a criação de sites.',
      detailsEn: 'Currently, I work as a Project Advisor at Empresa Júnior Áurea, integrating the projects team. In this role, I will be responsible for the development of various projects in the computing field, starting with the creation of websites.',
    },
    {
      yearPt: 'Novembro 2024 - O Momento',
      yearEn: 'November 2024 - Present',
      cargoPt: 'Estagiário de engenharia',
      cargoEn: 'Engineering Intern',
      descriptionPt: 'Data Campos Sistemas',
      descriptionEn: 'Data Campos Sistemas',
      detailsPt: 'Iniciei minha trajetória profissional em uma Fábrica de Software localizada em Campos dos Goytacazes. Atualmente, sou responsável pelo planejamento e desenvolvimento do sistema web e do aplicativo de ordem de serviço da empresa Limport Serviços.',
      detailsEn: 'I started my professional journey at a Software Factory located in Campos dos Goytacazes. Currently, I am responsible for the planning and development of the web system and the service order application for the company Limport Serviços.',
    },
    {
      yearPt: 'Março 2023 - O Momento',
      yearEn: 'March 2023 - Present',
      cargoPt: 'Bolsista de Mineração de Dados',
      cargoEn: 'Data Mining Scholarship',
      descriptionPt: 'IFF - Instituto Federal Fluminense · Meio período',
      descriptionEn: 'IFF - Fluminense Federal Institute · Part-time',
      detailsPt: 'Atualmente, atuo como bolsista no projeto de Mineração de Dados, onde tive a valiosa oportunidade de aprofundar meu conhecimento e adquirir experiência significativa em Python, Django, Mineração de Dados e Gestão. Esta experiência como bolsista tem sido fundamental para o meu crescimento profissional, permitindo-me desenvolver habilidades sólidas em análise de dados, modelagem estatística e aprendizado de máquina. Sou grato pela chance de contribuir para este projeto de pesquisa e estou comprometido em continuar expandindo meu conhecimento e habilidades na área de Mineração de Dados.',
      detailsEn: 'Currently, I work as a scholarship holder in the Data Mining project, where I had the valuable opportunity to deepen my knowledge and gain significant experience in Python, Django, Data Mining, and Management. This scholarship experience has been crucial for my professional growth, allowing me to develop solid skills in data analysis, statistical modeling, and machine learning. I am grateful for the chance to contribute to this research project and I am committed to continuing to expand my knowledge and skills in the field of Data Mining.',
    },
    {
      yearPt: 'Agosto 2024 - O Momento',
      yearEn: 'August 2024 - Present',
      cargoPt: 'Desenvolvedor web',
      cargoEn: 'Web Developer',
      descriptionPt: 'CIA do PVC - Freelance',
      descriptionEn: 'CIA do PVC - Freelance',
      detailsPt: 'Atuo no desenvolvimento e manutenção do site da Cia do PVC, focando na criação de uma plataforma eficiente e moderna para promover os produtos e serviços da empresa. Meu trabalho inclui a implementação de funcionalidades, otimização da experiência do usuário e a garantia de uma presença online robusta e alinhada com as necessidades do mercado.',
      detailsEn: 'I work on the development and maintenance of the Cia do PVC website, focusing on creating an efficient and modern platform to promote the company`s products and services. My work includes implementing features, optimizing the user experience, and ensuring a robust online presence aligned with market needs.',
    },
    {
      yearPt: 'Janeiro 2019 - O Momento',
      yearEn: 'January 2019 - Present',
      cargoPt: 'Desenvolvedor de Jogos Indie',
      cargoEn: 'Indie Game Developer',
      descriptionPt: 'Solo',
      descriptionEn: 'Solo',
      detailsPt: 'Criador de jogos indie com portfólio diversificado, incluindo visual novels e outros títulos experimentais. Proficiente em Game Maker 2, com experiência em publicação em plataformas como itch.io. Busco colaborar em projetos que combinem narrativa envolvente com jogabilidade divertida.',
      detailsEn: 'Indie game creator with a diverse portfolio, including visual novels and other experimental titles. Proficient in Game Maker 2, with experience publishing on platforms like itch.io. Seeking to collaborate on projects that combine engaging storytelling with fun gameplay.',
    },
    {
      yearPt: 'Janeiro 2024 - Julho 2024',
      yearEn: 'January 2024 - July 2024',
      cargoPt: 'Desenvolvedor de Jogos',
      cargoEn: 'Game Developer',
      descriptionPt: 'Anos 3000 Studio · Terceirizado',
      descriptionEn: 'Anos 3000 Studio · Contracted',
      detailsPt: 'No início de 2024, me envolvi no desenvolvimento de "Tales Of Progress", um jogo independente no qual fui um dos principais programadores durante a fase Beta. Trabalhei ao lado de meu colega Carlos, e juntos, trouxemos à vida vários elementos fundamentais do jogo. Minha experiência incluiu a criação de sistemas essenciais e o refinamento de funcionalidades para garantir uma jogabilidade envolvente e polida.',
      detailsEn: 'At the beginning of 2024, I was involved in the development of Tales of Progress, an independent game where I was one of the lead programmers during the Beta phase. I worked alongside my colleague Carlos, and together we brought several key game elements to life. My experience included creating core systems and refining features to ensure engaging and polished gameplay.',
    },
  ];

  return (
    <div className="experiencias-container">
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

      <main className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <h3>{language === 'pt' ? exp.yearPt : exp.yearEn}</h3>
              <h4>{language === 'pt' ? exp.cargoPt : exp.cargoEn}</h4> {/* Exibe o cargo */}
              <p>{language === 'pt' ? exp.descriptionPt : exp.descriptionEn}</p>
              <button
                className="expand-button"
                onClick={() => toggleExpand(index)}
              >
                {expanded === index ? '▲' : '▼'}
              </button>
              {expanded === index && (
                <div className="details">
                  <p>
                    {language === 'pt' ? exp.detailsPt : exp.detailsEn}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Experiencias;
