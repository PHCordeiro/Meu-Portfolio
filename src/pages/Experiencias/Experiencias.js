import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Experiencias.css';

function Experiencias() {
  const [language, setLanguage] = useState('pt');
  const [expanded, setExpanded] = useState(null);
  const [skillsExpanded, setSkillsExpanded] = useState(null);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  const toggleSkillsExpand = (index) => {
    setSkillsExpanded((prev) => (prev === index ? null : index));
  };

  const experiences = [
    {
      yearPt: "Outubro 2024 - O Momento",
      yearEn: "October 2024 - Present",
      cargoPt: "Diretor da Presidência",
      cargoEn: "President Director",
      descriptionPt: "Aurea Soluções e Projetos",
      descriptionEn: "Aurea Solutions and Projects",
      detailsPt:
        "Atualmente, exerço o cargo de Diretor da Presidência na Empresa Júnior Aurea. Nesse papel, sou responsável por liderar a Diretoria Executiva, promover o alinhamento estratégico entre as áreas e garantir o bom andamento dos processos internos e externos da empresa, com foco em gestão, liderança e resultados institucionais.",
      detailsEn:
        "Currently, I serve as the President Director at Empresa Júnior Aurea. In this role, I am responsible for leading the Executive Board, promoting strategic alignment among departments, and ensuring the efficient management of both internal and external operations, with a focus on leadership, governance, and institutional results.",
      skillsPt: ["Gestão Estratégica", "Liderança", "Comunicação Institucional"],
      skillsEn: ["Strategic Management", "Leadership", "Institutional Communication"],
    },
    {
      yearPt: "Maio 2025 - O Momento",
      yearEn: "May 2025 - Present",
      cargoPt: "Analista",
      cargoEn: "Analyst",
      descriptionPt: "Minsait · Tempo integral",
      descriptionEn: "Minsait · Full-time",
      detailsPt:
        "Atuo como Analista na Minsait, contribuindo para o desenvolvimento, integração e suporte de soluções tecnológicas voltadas a clientes corporativos. Participo de processos de análise, implementação e monitoramento de sistemas, garantindo eficiência operacional e entrega de valor.",
      detailsEn:
        "I work as an Analyst at Minsait, contributing to the development, integration, and support of technological solutions for corporate clients. I take part in analysis, implementation, and system monitoring processes, ensuring operational efficiency and value delivery.",
      skillsPt: ["Análise de Sistemas", "Integração de Soluções", "Suporte Técnico"],
      skillsEn: ["Systems Analysis", "Solutions Integration", "Technical Support"],
    },
    {
      yearPt: "Janeiro 2019 - O Momento",
      yearEn: "January 2019 - Present",
      cargoPt: "Desenvolvedor de Jogos Indie",
      cargoEn: "Indie Game Developer",
      descriptionPt: "Solo",
      descriptionEn: "Solo",
      detailsPt:
        "Criador de jogos indie com portfólio diversificado, incluindo visual novels e outros títulos experimentais. Proficiente em Game Maker 2, com experiência em publicação em plataformas como itch.io. Busco colaborar em projetos que combinem narrativa envolvente com jogabilidade divertida.",
      detailsEn:
        "Indie game creator with a diverse portfolio, including visual novels and other experimental titles. Proficient in Game Maker 2, with experience publishing on platforms like itch.io. Seeking to collaborate on projects that combine engaging storytelling with fun gameplay.",
      skillsPt: ["Programação de Jogos", "Jogabilidade", "Pixel Art", "Level Design"],
      skillsEn: ["Game Programming", "Gameplay", "Pixel Art", "Level Design"],
    },
    {
      yearPt: "Novembro 2024 - Abril 2025",
      yearEn: "November 2024 - April 2025",
      cargoPt: "Estagiário de Engenharia",
      cargoEn: "Engineering Intern",
      descriptionPt: "Data Campos Sistemas",
      descriptionEn: "Data Campos Sistemas",
      detailsPt:
        "Iniciei minha trajetória profissional em uma Fábrica de Software localizada em Campos dos Goytacazes. Durante o estágio, fui responsável pelo planejamento e desenvolvimento do sistema web e do aplicativo de ordem de serviço da empresa Limport Serviços, utilizando tecnologias modernas e práticas de engenharia de software.",
      detailsEn:
        "I began my professional journey at a Software Factory located in Campos dos Goytacazes. During the internship, I was responsible for planning and developing the web system and the service order application for the company Limport Serviços, using modern technologies and software engineering practices.",
      skillsPt: ["Desenvolvimento de Software", "Teste de Sistemas", "Ionic Angular"],
      skillsEn: ["Software Development", "System Testing", "Ionic Angular"],
    },
    {
      yearPt: "Março 2023 - Dezembro 2024",
      yearEn: "March 2023 - December 2024",
      cargoPt: "Bolsista de Mineração de Dados",
      cargoEn: "Data Mining Scholarship",
      descriptionPt: "IFF - Instituto Federal Fluminense · Meio período",
      descriptionEn: "IFF - Fluminense Federal Institute · Part-time",
      detailsPt:
        "Atuei como bolsista no projeto de Mineração de Dados, onde tive a valiosa oportunidade de aprofundar meu conhecimento e adquirir experiência significativa em Python, Django, Mineração de Dados e Gestão. Esta experiência como bolsista foi fundamental para o meu crescimento profissional, permitindo-me desenvolver habilidades sólidas em análise de dados, modelagem estatística e aprendizado de máquina. Sou grato pela chance que tive de contribuir para este projeto de pesquisa e pelo conhecimento adquirido na área de Mineração de Dados.",
      detailsEn:
        "I worked as a scholarship holder in the Data Mining project, where I had the valuable opportunity to deepen my knowledge and gain significant experience in Python, Django, Data Mining, and Management. This scholarship experience was crucial for my professional growth, allowing me to develop solid skills in data analysis, statistical modeling, and machine learning. I am grateful for the opportunity I had to contribute to this research project and for the knowledge gained in the field of Data Mining.",
      skillsPt: ["Desenvolvimento de Software", "Python", "Django"],
      skillsEn: ["Software Development", "Python", "Django"],
    },
    {
      yearPt: "Janeiro 2024 - Julho 2024",
      yearEn: "January 2024 - July 2024",
      cargoPt: "Desenvolvedor de Jogos",
      cargoEn: "Game Developer",
      descriptionPt: "Anos 3000 Studio · Terceirizado",
      descriptionEn: "Anos 3000 Studio · Contracted",
      detailsPt:
        'No início de 2024, me envolvi no desenvolvimento de "Tales Of Progress", um jogo independente no qual fui um dos principais programadores durante a fase Beta. Trabalhei ao lado de meu colega Carlos, e juntos, trouxemos à vida vários elementos fundamentais do jogo. Minha experiência incluiu a criação de sistemas essenciais e o refinamento de funcionalidades para garantir uma jogabilidade envolvente e polida.',
      detailsEn:
        "At the beginning of 2024, I was involved in the development of Tales of Progress, an independent game where I was one of the lead programmers during the Beta phase. I worked alongside my colleague Carlos, and together we brought several key game elements to life. My experience included creating core systems and refining features to ensure engaging and polished gameplay.",
      skillsPt: ["GameMaker", "Pixel Art", "Level Design"],
      skillsEn: ["GameMaker", "Pixel Art", "Level Design"],
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
              <h4>{language === 'pt' ? exp.cargoPt : exp.cargoEn}</h4>
              <p>{language === 'pt' ? exp.descriptionPt : exp.descriptionEn}</p>
              <button
                className="expand-button"
                onClick={() => toggleExpand(index)}
              >
                {expanded === index ? '▲' : '▼'}
              </button>
              {expanded === index && (
                <div className="details">
                  <p>{language === 'pt' ? exp.detailsPt : exp.detailsEn}</p>
                  <button
                    className="expand-button"
                    onClick={() => toggleSkillsExpand(index)}
                  >
                    {skillsExpanded === index ? '▲ Competências' : '▼ Competências'}
                  </button>
                  {skillsExpanded === index && (
                    <div className="details skills">
                      <ul>
                        {(language === 'pt' ? exp.skillsPt : exp.skillsEn).map(
                          (skill, skillIndex) => (
                            <li key={skillIndex}>{skill}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
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