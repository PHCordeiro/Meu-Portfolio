import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programas.css";

function NCUSite() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/NCU/NCU1.jpg`, 
            alt: { 
                pt: "Imagem 1 do projeto NCU", 
                en: "Image 1 of the NCU project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/NCU/NCU2.jpg`, 
            alt: { 
                pt: "Imagem 2 do projeto NCU", 
                en: "Image 2 of the NCU project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/NCU/NCU3.jpg`, 
            alt: { 
                pt: "Imagem 3 do projeto NCU", 
                en: "Image 3 of the NCU project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/NCU/NCU4.jpg`, 
            alt: { 
                pt: "Imagem 4 do projeto NCU", 
                en: "Image 4 of the NCU project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/NCU/NCU5.jpg`, 
            alt: { 
                pt: "Imagem 5 do projeto NCU", 
                en: "Image 5 of the NCU project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/NCU/NCU6.jpg`, 
            alt: { 
                pt: "Imagem 6 do projeto NCU", 
                en: "Image 6 of the NCU project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/NCU/NCU7.jpg`, 
            alt: { 
                pt: "Imagem 7 do projeto NCU", 
                en: "Image 7 of the NCU project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/NCU/NCU8.jpg`, 
            alt: { 
                pt: "Imagem 8 do projeto NCU", 
                en: "Image 8 of the NCU project" 
            } 
        },
    ];    

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
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
                <section className="project-description">
                    <h2>{language === "pt" ? "Descrição do Projeto" : "Project Description"}</h2>
                    <p>
                        {language === "pt"
                            ? "Trabalhei em um projeto significativo no qual eu e minha parceira desenvolvemos um website para nossa loja nerd. Utilizando o WordPress, fui responsável pelo desenvolvimento de cada página, garantindo sua funcionalidade e estética. Este projeto não apenas aprimorou minhas habilidades técnicas, mas também demonstrou minha capacidade de colaboração e gestão de projetos. Estou entusiasmado em continuar explorando novas oportunidades para aplicar e expandir meu conjunto de habilidades."
                            : "I worked on a significant project where my partner and I developed a website for our nerd store. Using WordPress, I was responsible for creating each page, ensuring both functionality and aesthetics. This project not only enhanced my technical skills but also demonstrated my ability to collaborate and manage projects. I am excited to continue exploring new opportunities to apply and expand my skill set."
                        }
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>WordPress</li>
                        <li>{language === "pt" ? "Desenvolvimento Web" : "Web Development"}</li>
                        <li>{language === "pt" ? "Gestão de projetos" : "Project management"}</li>
                        <li>{language === "pt" ? "Hospedagem de sites" : "Website hosting"}</li>
                    </ul>
                </section>

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

            {/* Botão no canto inferior */}
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

export default NCUSite;
