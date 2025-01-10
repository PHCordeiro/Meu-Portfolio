import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function PongClone() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/PongClone/Pong.png`, 
            alt: { 
                pt: "Imagem 1 do projeto PongClone", 
                en: "Image 1 of the PongClone project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/PongClone/Pong2.png`, 
            alt: { 
                pt: "Imagem 2 do projeto PongClone", 
                en: "Image 2 of the PongClone project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/PongClone/Pong3.png`, 
            alt: { 
                pt: "Imagem 3 do projeto PongClone", 
                en: "Image 3 of the PongClone project" 
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
                            ? "Este é um clone simples do jogo Pong, criado como um projeto de aprendizado no Unity, sendo o meu primeiro jogo feito com essa ferramenta apenas para prática."
                            : "This is a simple clone of the Pong game created as a learning project in Unity, my first game made with this tool just for practice. "
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Para jogar, o jogador pode controlar o Jogador 1 com as teclas W e S, enquanto outra pessoa pode ser o Jogador 2 clicando em uma das teclas de seta, para cima ou para baixo."
                            : "To play, the player can control Player 1 with W and S, while another person can be Player 2 by clicking on one of the arrow keys, either up or down. "
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Clicar na tecla de seta alterna o Jogador 2 para o modo de Inteligência Artificial, e pressionar Enter o retorna para o modo de IA."
                            : "Clicking on the arrow key switches Player 2 from Artificial Intelligence mode, and pressing Enter brings them back into AI mode."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Gêneros: Simulação, Pong"
                            : "Genres: Simulation, Pong"
                        }
                        <br />
                        <br />
                        <p>
                            <span>
                                Link: <a href="https://mechanical-brain.itch.io/pong-clone" target="_blank" rel="noopener noreferrer">Pong Clone</a>
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
                        <li>{language === "pt" ? "Jogabilidade" : "Gameplay"}</li>
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

export default PongClone;
