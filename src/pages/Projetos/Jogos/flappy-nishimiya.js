import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function Nishimiya() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/Nishimiya/Nishimiya1.png`, 
            alt: { 
                pt: "Imagem 1 do projeto Nishimiya", 
                en: "Image 1 of the Nishimiya project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Nishimiya/Nishimiya2.png`, 
            alt: { 
                pt: "Imagem 2 do projeto Nishimiya", 
                en: "Image 2 of the Nishimiya project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Nishimiya/Nishimiya3.png`, 
            alt: { 
                pt: "Imagem 3 do projeto Nishimiya", 
                en: "Image 3 of the Nishimiya project" 
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
                            ? "Flappy Nishimiya é apenas um pequeno projeto que fiz durante o meu curso NoNe Class, como uma tentativa de criar um jogo no estilo Flappy."
                            : "Flappy Nishimiya is just a small project I made during my NoNe Class course in an attempt to create a Flappy-type game."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Bem, como sou um grande fã de Jujutsu Kaisen, pensei em fazer um jogo sobre o anime, mas não sabia em que personagem ou aspecto me concentrar... Foi então que, ao olhar uma lista de personagens do anime, vi a Nishimiya e me lembrei de que ela voa em sua vassoura! Sabendo que muitas pessoas gostam da personagem, mas que ela não teve muito desenvolvimento, decidi criar um jogo pequeno e bem simples sobre ela."
                            : "Well, as I'm a huge fan of Jujutsu Kaisen, I thought about making a game about the anime, but I didn't know what to focus on... That's when, looking at a list of characters from the anime, I saw Nishimiya and remembered that she flies on her broomstick!! Knowing that many people like the character, but she didn't have much development, I decided to make a small, very simple game about her."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "O objetivo do jogo é mostrar meu desenvolvimento como programador de jogos em uma nova engine, servindo mais como portfólio, por isso ele é bastante simples."
                            : "The game aims to showcase my development as a game programmer in a new Engine, serving more as a portfolio, so it's quite simple."
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
                                Link: <a href="https://mechanical-brain.itch.io/flappy-nishimiya" target="_blank" rel="noopener noreferrer">Nishimiya</a>
                            </span>
                        </p>
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>Unity</li>
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

export default Nishimiya;
