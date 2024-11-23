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
                            ? "Desenvolvi meu primeiro site para a loja que administro junto com minha namorada! O objetivo é apresentar nossos produtos de forma clara e atrativa, proporcionando a melhor experiência possível para nossos clientes."
                            : "I developed my first website for the store I manage with my girlfriend! The goal is to showcase our products clearly and attractively, providing the best possible experience for our customers."
                        }
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>WordPress</li>
                        <li>{language === "pt" ? "Desenvolvimento Web" : "Web Development"}</li>
                    </ul>
                </section>

                <section className="project-images">
                    <h2>{language === "pt" ? "Imagens do Projeto" : "Project Images"}</h2>
                    <div className="image-grid">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="image-container"
                                onClick={() => openModal(image)}
                            >
                                <img src={image.src} alt={image.alt[language]} />
                            </div>
                        ))}
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
