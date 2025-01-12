import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function Passaros() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/Passaros/Passaros1.png`, 
            alt: { 
                pt: "Imagem 1 do projeto Passaros", 
                en: "Image 1 of the Passaros project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Passaros/Passaros2.png`, 
            alt: { 
                pt: "Imagem 2 do projeto Passaros", 
                en: "Image 2 of the Passaros project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Passaros/Passaros3.png`, 
            alt: { 
                pt: "Imagem 3 do projeto Passaros", 
                en: "Image 3 of the Passaros project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Passaros/Passaros4.png`, 
            alt: { 
                pt: "Imagem 4 do projeto Passaros", 
                en: "Image 4 of the Passaros project" 
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
                            ? "O Jogo dos Pássaros foi feito para testar as minhas habilidades e gerar mais conhecimento sobre a criação de jogos. Sou muito grato com o NoNe por ter me ensinado tanto e espero que vocês se divirtam!"
                            : "The Bird Game was made to test my skills and gain more knowledge about game development. I am very grateful to NoNe for teaching me so much, and I hope you all have fun!"
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Gêneros: Indie, Flappy Bird"
                            : "Genres: Indie, Flappy Bird"
                        }
                        <br />
                        <br />
                        <p>
                            <span>
                                Link: <a href="https://mechanical-brain.itch.io/jogo-dos-pssaros" target="_blank" rel="noopener noreferrer">Jogo dos Pássaros</a>
                            </span>
                        </p>
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>GameMaker</li>
                        <li>{language === "pt" ? "Desenvolvimento de jogos" : "Game Development"}</li>
                        <li>Pixel Art</li>
                        <li>{language === "pt" ? "Mecânica de jogos" : "Game Mechanics"}</li>
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
                <Link to="/projetos-jogos">
                    <button className="back-button">
                        {language === "pt" ? "Voltar" : "Back"}
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default Passaros;
