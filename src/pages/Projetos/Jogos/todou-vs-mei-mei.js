import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function TodouVSMeiMei() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/TodouMeiMei/TodouMeiMei1.png`, 
            alt: { 
                pt: "Imagem 1 do projeto TodouMeiMei", 
                en: "Image 1 of the TodouMeiMei project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/TodouMeiMei/TodouMeiMei2.png`, 
            alt: { 
                pt: "Imagem 2 do projeto TodouMeiMei", 
                en: "Image 2 of the TodouMeiMei project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/TodouMeiMei/TodouMeiMei3.png`, 
            alt: { 
                pt: "Imagem 3 do projeto TodouMeiMei", 
                en: "Image 3 of the TodouMeiMei project" 
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
                            ? "Um jogo inspirado na partida de Pong entre Todou e Mei Mei, apresentada em um episódio do anime Jujutsu Kaisen, foi desenvolvido."
                            : "A game inspired by the Pong match between Todou and Mei Mei, featured in an episode of the anime Jujutsu Kaisen, has been developed. "
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Esta criação é uma homenagem à cena em questão, escolhida devido à minha afinidade com o anime e ao prazer que encontro em criar projetos relacionados a ele."
                            : "This creation is a tribute to the scene in question, chosen due to my affinity for the anime and the enjoyment I derive from creating projects related to it. "
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Este jogo foi produzido como parte do curso oferecido pela NoNe Class."
                            : "This game was produced as part of the course offered by NoNe Class."
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
                                Link: <a href="https://mechanical-brain.itch.io/todou-vs-mei-mei-pong" target="_blank" rel="noopener noreferrer">Todou VS Mei Mei</a>
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

export default TodouVSMeiMei;
