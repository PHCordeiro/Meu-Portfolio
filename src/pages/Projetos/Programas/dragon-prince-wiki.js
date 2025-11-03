import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programas.css";

function DragonPrince() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/DragonPrince/DragonPrince1.jpg`, 
            alt: { 
                pt: "Imagem 1 do projeto DragonPrince", 
                en: "Image 1 of the DragonPrince project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DragonPrince/DragonPrince2.jpg`, 
            alt: { 
                pt: "Imagem 2 do projeto DragonPrince", 
                en: "Image 2 of the DragonPrince project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DragonPrince/DragonPrince3.jpg`, 
            alt: { 
                pt: "Imagem 3 do projeto DragonPrince", 
                en: "Image 3 of the DragonPrince project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DragonPrince/DragonPrince4.jpg`, 
            alt: { 
                pt: "Imagem 4 do projeto DragonPrince", 
                en: "Image 4 of the DragonPrince project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DragonPrince/DragonPrince5.jpg`, 
            alt: { 
                pt: "Imagem 5 do projeto DragonPrince", 
                en: "Image 5 of the DragonPrince project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DragonPrince/DragonPrince6.jpg`, 
            alt: { 
                pt: "Imagem 6 do projeto DragonPrince", 
                en: "Image 6 of the DragonPrince project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DragonPrince/DragonPrince7.jpg`, 
            alt: { 
                pt: "Imagem 7 do projeto DragonPrince", 
                en: "Image 7 of the DragonPrince project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DragonPrince/DragonPrince8.jpg`, 
            alt: { 
                pt: "Imagem 8 do projeto DragonPrince", 
                en: "Image 8 of the DragonPrince project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DragonPrince/DragonPrince9.jpg`, 
            alt: { 
                pt: "Imagem 9 do projeto DragonPrince", 
                en: "Image 9 of the DragonPrince project" 
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
                            ? "Desenvolvi este projeto com o objetivo de aprender uma nova tecnologia: Ionic Angular. Embora não seja um projeto muito complexo, ele me proporcionou um aprendizado significativo sobre a tecnologia e suas possíveis aplicações em projetos de maior escala."
                            : "I developed this project with the goal of learning a new technology: Ionic Angular. Although it is not a very complex project, it provided me with significant insights into the technology and its potential applications in larger-scale projects."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Dragon Prince - Wiki é uma pequena enciclopédia criada por um fã, dedicada a apresentar alguns dos personagens principais desta obra incrível, que ocupa um lugar especial no meu coração. No aplicativo, é possível navegar entre as seções e visualizar informações e imagens dos protagonistas."
                            : "Dragon Prince - Wiki is a small encyclopedia created by a fan, dedicated to showcasing some of the main characters from this amazing work, which holds a special place in my heart. In the app, you can navigate through the sections and view information and images of the protagonists."
                        }
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>TypeScript</li>
                        <li>Ionic Serve</li>
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

export default DragonPrince;
