import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function MudMan() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { src: "/MudMan/MudMan1.png", alt: { pt: "Imagem 1 do projeto MudMan", en: "Image 1 of the MudMan project" } },
        { src: "/MudMan/MudMan2.png", alt: { pt: "Imagem 2 do projeto MudMan", en: "Image 2 of the MudMan project" } },
        { src: "/MudMan/MudMan3.png", alt: { pt: "Imagem 3 do projeto MudMan", en: "Image 3 of the MudMan project" } },
        { src: "/MudMan/MudMan4.png", alt: { pt: "Imagem 4 do projeto MudMan", en: "Image 4 of the MudMan project" } },
        { src: "/MudMan/MudMan5.png", alt: { pt: "Imagem 5 do projeto MudMan", en: "Image 5 of the MudMan project" } },
        { src: "/MudMan/MudMan6.jpg", alt: { pt: "Imagem 6 do projeto MudMan", en: "Image 6 of the MudMan project" } },
        { src: "/MudMan/MudMan7.jpg", alt: { pt: "Imagem 7 do projeto MudMan", en: "Image 7 of the MudMan project" } },
        { src: "/MudMan/MudMan8.jpg", alt: { pt: "Imagem 8 do projeto MudMan", en: "Image 8 of the MudMan project" } },
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
                            ? "Recentemente, participei da Nona NoNe Jam, uma competição de desenvolvimento de jogos, cujo desafio foi criar um jogo com o tema 'Mistura de Gêneros'. Em resposta a esse desafio, desenvolvi o jogo *Mud Man*, que combina elementos de terror, plataforma e puzzle, transformando-se em um shooter no final. O jogo ficou na 45ª posição entre 74 participantes. Apesar de não ter alcançado o top 30, fiquei extremamente satisfeito com a experiência, especialmente pelas críticas construtivas que recebi e que pretendo aplicar em futuros projetos. Além disso, esta foi minha primeira participação oficial em uma Game Jam, o que tornou a experiência ainda mais gratificante."
                            : "Recently, I participated in the Ninth NoNe Jam, a game development competition, where the challenge was to create a game based on the theme 'Genre Mix'. In response to this challenge, I developed the game Mud Man, which combines elements of horror, platforming, and puzzle, eventually transforming into a shooter at the end. The game ranked 45th out of 74 participants. Although I didn't reach the top 30, I was extremely satisfied with the experience, especially due to the constructive feedback I received, which I intend to apply in future projects. Moreover, this was my first official participation in a Game Jam, making the experience even more rewarding."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Gêneros: Terror, Plataforma, Puzzle, Shooter, Indie"
                            : "Genres: Horror, Platformer, Puzzle, Shooter, Indie"
                        }
                        <br />
                        <br />
                        <p>
                            <span>
                                Link: <a href="https://mechanical-brain.itch.io/mud-man" target="_blank" rel="noopener noreferrer">https://mechanical-brain.itch.io/mud-man</a>
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

export default MudMan;
