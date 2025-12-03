import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function DBZ() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/DBZ/dbz1.png`, 
            alt: { 
                pt: "Imagem 1 do jogo DBZ Space Shooter", 
                en: "Image 1 of DBZ Space Shooter" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DBZ/dbz2.png`, 
            alt: { 
                pt: "Imagem 2 do jogo DBZ Space Shooter", 
                en: "Image 2 of DBZ Space Shooter" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/DBZ/dbz3.png`, 
            alt: { 
                pt: "Imagem 3 do jogo DBZ Space Shooter", 
                en: "Image 3 of DBZ Space Shooter" 
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

                    {/* Texto em PT e EN */}
                    <p>
                        {language === "pt"
                            ? "Dragon Ball Space Shooter é um jogo inspirado no universo de Dragon Ball, desenvolvido com o objetivo de aprimorar as habilidades do criador na construção de um jogo do gênero shooter."
                            : "Dragon Ball Space Shooter is a game inspired by the Dragon Ball universe, developed with the goal of enhancing the creator's skills in building a shooter-style game."
                        }
                        <br /><br />
                        {language === "pt"
                            ? "Encontre personagens clássicos do anime e enfrente-os a bordo da icônica nave de Vegeta. Colete as Sementes dos Deuses para recuperar vida e utilize Power Ups para restaurar seu shield."
                            : "Encounter classic characters from the anime and face them aboard Vegeta's iconic spaceship. Collect God's Seeds to recover health and use Power Ups to restore your shield."
                        }
                        <br /><br />
                        {language === "pt"
                            ? "Os controles são os seguintes:"
                            : "The controls are as follows:"
                        }
                        <br /><br />
                        {language === "pt"
                            ? "Pressione E para ativar o shield;   Utilize WASD ou as setas direcionais para mover a nave;   Dispare utilizando a tecla Espaço ou o botão esquerdo do mouse."
                            : "Press E to activate the shield;   Use WASD or the arrow keys to move the ship;   Shoot using the Space key or the left mouse button."
                        }
                        <br /><br />
                        {language === "pt"
                            ? "Desafie-se a alcançar a maior pontuação possível."
                            : "Challenge yourself to achieve the highest possible score."
                        }
                    </p>
                </section>

                {/* Tecnologias / Habilidades */}
                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>GameMaker</li>
                        <li>{language === "pt" ? "Desenvolvimento de jogos 2D" : "2D Game Development"}</li>
                        <li>{language === "pt" ? "Design de mecânicas" : "Mechanics Design"}</li>
                        <li>{language === "pt" ? "Efeitos visuais" : "Visual Effects"}</li>
                    </ul>
                </section>

                {/* Imagens */}
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

                {/* Modal */}
                {selectedImage && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content">
                            <img src={selectedImage.src} alt={selectedImage.alt[language]} />
                        </div>
                    </div>
                )}
            </main>

            {/* Botão de voltar */}
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

export default DBZ;
