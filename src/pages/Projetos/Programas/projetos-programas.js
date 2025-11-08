// src/pages/ProjetosJogos.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projetos.css';

const projects = [
    {
      id: 8,
      name: { 
        pt: "Aplicativo Móvel de Gestão de Ordens de Serviço (OS)", 
        en: "Mobile Work Order Management App" 
      },
      description: { 
        pt: "Aplicativo desenvolvido com Ionic para gerenciar Ordens de Serviço em campo, permitindo check-in/check-out, acompanhamento gerencial e integração com sistema web.", 
        en: "App developed with Ionic to manage Work Orders in the field, enabling check-in/check-out, managerial tracking, and integration with a web system." 
      },
      technologies: { 
        pt: ["Ionic Framework", "TypeScript", "MySQL", "Desenvolvimento de API", "Modelagem de Software"], 
        en: ["Ionic Framework", "TypeScript", "MySQL", "API Development", "Software Modeling"] 
      },
      image: "/OSApp/OSApp3.jpeg",
    },
    {
      id: 7,
      name: { 
        pt: "Aplicativo para Laboratório", 
        en: "Laboratory App" 
      },
      description: { 
        pt: "Atuei no desenvolvimento do aplicativo de um renomado laboratório da minha região. Fui responsável, principalmente, pela implementação da funcionalidade de pré-agendamento de consultas pelos clientes, além de desenvolver o sistema de notificações dentro do aplicativo para os usuários.", 
        en: "I worked on the development of an app for a renowned laboratory in my region. I was mainly responsible for implementing the appointment pre-scheduling feature for clients, as well as developing the in-app notification system for users." 
      },
      technologies: { 
        pt: ["Ionic Framework", "TypeScript", "MySQL", "Desenvolvimento de API", "Modelagem de Software"], 
        en: ["Ionic Framework", "TypeScript", "MySQL", "API Development", "Software Modeling"] 
      },
      image: "/LaboratoryApp/Lab6.jpg",
    },
    {
      id: 6,
      name: { pt: "Ferramenta BPSOIS", en: "BPSOIS Tool" },
      description: { 
        pt: "O projeto integra a análise de modelos UML (Unified Modeling Language), o desenvolvimento de modelos preditivos para saúde e a otimização de processos organizacionais por meio do Método GQM e da Mineração de Texto.", 
        en: "The project integrates the analysis of UML (Unified Modeling Language) models, the development of predictive models for healthcare, and the optimization of organizational processes through the GQM Method and Text Mining."
      },
      technologies: { pt: ["Python", "Django", "Mineração de Dados", "XML", "UML"], en: ["Python", "Django", "Data Mining", "XML", "UML"] },
      image: "/BPSOIS/2.png",    
    },
    {
      id: 5,
      name: { pt: "Príncipe Dragão Wiki", en: "Dragon Prince Wiki" },
      description: { 
        pt: "Desenvolvi este projeto com o objetivo de aprender uma nova tecnologia: Ionic Angular. Embora não seja um projeto muito complexo, ele me proporcionou um aprendizado significativo sobre a tecnologia e suas possíveis aplicações em projetos de maior escala.", 
        en: "I developed this project with the goal of learning a new technology: Ionic Angular. Although it is not a very complex project, it provided me with significant insights into the technology and its potential applications in larger-scale projects."
      },
      technologies: { pt: ["Ionic Angular", "TypeScript"], en: ["Ionic Angular", "TypeScript"] },
      image: "/DragonPrince/DragonPrince1.jpg",    
    },
    {
      id: 4,
      name: { pt: "Green Magic - Sistema", en: "Green Magic - System" },
      description: { 
        pt: "Para aprendizado, desenvolvi um sistema para uma loja ficticia, esse sistema permite o cadastro de clientes, produtos e vendas, além de trazer um pequeno dashboard no começo.", 
        en: "For learning purposes, I developed a system for a fictional store. This system allows the registration of customers, products, and sales, as well as featuring a small dashboard at the beginning."
      },
      technologies: { pt: ["ScriptCase", "PHP", "MySQL"], en: ["ScriptCase", "PHP", "MySQL"] },
      image: "/Green Magic.jpg",    
    },
    {
      id: 3,
      name: { pt: "NCU Site", en: "NCU Site" },
      description: { 
        pt: "O site da Nerd Cinematic Universe foi um projeto feito totalmente por mim com o intuito de divulgar os conteúdos da loja, além de melhorar minhas habilidades no desenvolvimento de projetos.", 
        en: "The Nerd Cinematic Universe website was a project entirely developed by me with the goal of promoting the store's content, as well as improving my skills in project development."
      },
      technologies: { pt: ["WordPress", "Desenvolvimento Web"], en: ["WordPress", "Web Development"] },
      image: "/NCU.jpg",
    },
    /*{
      id: 2,
      name: { pt: "Cadastro com API", en: "API Registration" },
      description: { 
        pt: "Desenvolvi uma API capaz de fazer os métodos de PUT, POST, GET e DELETE em uma base de dados de clientes. Também desenvolvi o front para tornar a aplicação funcional sem precisar utilizar apenas o Postman.", 
        en: "I developed an API capable of performing the PUT, POST, GET, and DELETE methods on a customer database. I also created the frontend to make the application functional without relying solely on Postman."
      },
      technologies: { pt: ["REACT", "MongoDB", "Prisma", "Node.js"], en: ["REACT", "MongoDB", "Prisma", "Node.js"] },
      image: "/ApiRegistration/api.jpg",      
    },
    {
      id: 1,
      name: { pt: "Login Simples", en: "Simple Login" },
      description: { 
        pt: "Desenvolvi um sistema básico de cadastro e login em PHP para aprimorar minhas habilidades. O projeto inclui funcionalidades de criação, edição, exclusão e busca de usuários.", 
        en: "I developed a basic registration and login system in PHP to improve my skills. The project includes user creation, editing, deletion, and search functionalities."
      },
      technologies: { pt: ["MySQL", "PHP", "HTML", "Desenvolvimento WEB"], en: ["MySQL", "PHP", "HTML", "Web Development"] },
      image: "/SimpleLogin/login.jpg",    
    },*/
  ];
  
  function ProjetosProgramas() {
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
            to={`/Projetos/Programas/${project.name.en.toLowerCase().replace(/ /g, '-')}`}
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

export default ProjetosProgramas;
