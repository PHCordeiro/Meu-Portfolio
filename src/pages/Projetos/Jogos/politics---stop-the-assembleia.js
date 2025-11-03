import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function Politics() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/Politics/Politics1.png`, 
            alt: { 
                pt: "Imagem 1 do projeto Politics", 
                en: "Image 1 of the Politics project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Politics/Politics2.png`, 
            alt: { 
                pt: "Imagem 2 do projeto Politics", 
                en: "Image 2 of the Politics project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Politics/Politics3.png`, 
            alt: { 
                pt: "Imagem 3 do projeto Politics", 
                en: "Image 3 of the Politics project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Politics/Politics4.png`, 
            alt: { 
                pt: "Imagem 4 do projeto Politics", 
                en: "Image 4 of the Politics project" 
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
                            ? "Politics - Stop the Assembleia é um jogo inspirado no mini-game de Stardew Valley, Journey of the Prairie King."
                            : "Politics - Stop the Assembleia is a game inspired by the Stardew Valley mini-game, Journey of the Prairie King."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "No Politics, o jogador se vê em um mundo injusto com um governo corrupto que visa arrecadar o máximo possível de dinheiro  da forma que for preciso. Com isso, afim de acabar com toda essa situação, o jogador precisa invadir o Congresso e derrotar todos os políticos que lá estão. Está pronto para quebrar literalmente todas as regras do seu país??!"
                            : "In Politics, the player finds themselves in an unjust world with a corrupt government determined to collect as much money as possible by any means necessary. To put an end to this situation, the player must storm the Congress and defeat all the politicians inside. Are you ready to literally break all the rules of your country??!"
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Vale destacar que esse jogo é para ser difícil! Sendo um Roguelike onde o jogador só possuí apenas uma vida!!"
                            : "It's worth noting that this game is designed to be challenging! As a roguelike, the player has only one life!!"
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Gêneros: Indie, GameJam, Shooter, Roguelike"
                            : "Genres: Indie, GameJam, Shooter, Roguelike"
                        }
                        <br />
                        <br />
                        <p>
                            <span>
                                Link: <a href="https://mechanical-brain.itch.io/politics-stop-the-assembleia" target="_blank" rel="noopener noreferrer">Politics - Stop the Assembleia</a>
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
                        <li>{language === "pt" ? "GameJam" : "GameJam"}</li>
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
                <Link to="/projetos-jogos">
                    <button className="back-button">
                        {language === "pt" ? "Voltar" : "Back"}
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default Politics;
