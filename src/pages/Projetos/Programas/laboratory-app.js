import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programas.css";

function LaboratoryApp() {
    const [language, setLanguage] = useState("pt");
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/LaboratoryApp/Lab1.jpg`, 
            alt: { 
                pt: "Imagem 1", 
                en: "Image 1" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/LaboratoryApp/Lab2.jpg`, 
            alt: { 
                pt: "Imagem 2", 
                en: "Image 2" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/LaboratoryApp/Lab3.jpg`, 
            alt: { 
                pt: "Imagem 3", 
                en: "Image 3" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/LaboratoryApp/Lab4.jpg`, 
            alt: { 
                pt: "Imagem 4", 
                en: "Image 4" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/LaboratoryApp/Lab5.jpg`, 
            alt: { 
                pt: "Imagem 5", 
                en: "Image 5" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/LaboratoryApp/Lab6.jpg`, 
            alt: { 
                pt: "Imagem 6", 
                en: "Image 6" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/LaboratoryApp/Lab7.jpg`, 
            alt: { 
                pt: "Imagem 7", 
                en: "Image 7" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/LaboratoryApp/Lab8.jpg`, 
            alt: { 
                pt: "Imagem 8", 
                en: "Image 8" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/LaboratoryApp/Lab9.jpg`, 
            alt: { 
                pt: "Imagem 9", 
                en: "Image 9" 
            } 
        },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="programa-page">
            {/* Header com links e alternância de idioma */}
            <header className="header">
                <div className="button-container">
                    <Link to="/">
                        <button>{language === "pt" ? "Início" : "Home"}</button>
                    </Link>
                    <Link to="/sobre">
                        <button>{language === "pt" ? "Sobre Mim" : "About Me"}</button>
                    </Link>
                    <Link to="/contato">
                        <button>{language === "pt" ? "Contato" : "Contact"}</button>
                    </Link>
                    <button onClick={toggleLanguage} className="language-toggle">
                        {language === "pt" ? "EN" : "PT"}
                    </button>
                </div>
            </header>

            {/* Conteúdo principal */}
            <main>
                {/* Descrição do projeto */}
                <section className="project-description">
                    <h2>{language === "pt" ? "Descrição do Projeto" : "Project Description"}</h2>
                    <p>
                        {language === "pt"
                            ? "Atuei no desenvolvimento do aplicativo de um renomado laboratório da minha região. Fui responsável, principalmente, pela implementação da funcionalidade de pré-agendamento de consultas pelos clientes, além de desenvolver o sistema de notificações dentro do aplicativo para os usuários."
                            : "I worked on the development of an app for a renowned laboratory in my region. I was mainly responsible for implementing the appointment pre-scheduling feature for clients, as well as developing the in-app notification system for users."
                        }
                    </p>
                </section>

                {/* Tecnologias utilizadas */}
                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>Ionic Framework</li>
                        <li>TypeScript</li>
                        <li>MySQL</li>
                        <li>{language === "pt" ? "Desenvolvimento de API" : "API Development"}</li>
                        <li>{language === "pt" ? "Modelagem de Software" : "Software Modeling"}</li>
                    </ul>
                </section>

                {/* Galeria de imagens */}
                <section className="project-images">
                    <h2>{language === "pt" ? "Imagens do Projeto" : "Project Images"}</h2>
                    <div className="carousel-container">
                        <button
                            className="carousel-arrow left"
                            onClick={() =>
                                setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1))
                            }
                        >
                            &#8249;
                        </button>

                        <div className="carousel">
                            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                                <div
                                    key={index}
                                    className="image-container"
                                    onClick={() => openModal(image)}
                                >
                                    <img src={image.src} alt={image.alt[language]} />
                                </div>
                            ))}
                        </div>

                        <button
                            className="carousel-arrow right"
                            onClick={() =>
                                setCurrentIndex((prev) =>
                                    prev >= images.length - 3 ? 0 : prev + 1
                                )
                            }
                        >
                            &#8250;
                        </button>
                    </div>
                </section>

                {/* Modal para ampliar imagem */}
                {selectedImage && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content">
                            <img src={selectedImage.src} alt={selectedImage.alt[language]} />
                        </div>
                    </div>
                )}
            </main>

            {/* Botão de retorno */}
            <div className="back-button-container">
                <Link to="/projetos-programas">
                    <button className="back-button">
                        {language === "pt" ? "Voltar" : "Back"}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LaboratoryApp;
