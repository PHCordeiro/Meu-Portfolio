import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function TapGojo() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/TapGojo/TapGojo1.png`, 
            alt: { 
                pt: "Imagem 1 do projeto TapGojo", 
                en: "Image 1 of the TapGojo project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/TapGojo/TapGojo2.png`, 
            alt: { 
                pt: "Imagem 2 do projeto TapGojo", 
                en: "Image 2 of the TapGojo project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/TapGojo/TapGojo3.png`, 
            alt: { 
                pt: "Imagem 3 do projeto TapGojo", 
                en: "Image 3 of the TapGojo project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/TapGojo/TapGojo4.png`, 
            alt: { 
                pt: "Imagem 4 do projeto TapGojo", 
                en: "Image 4 of the TapGojo project" 
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
                            ? "Este jogo é inspirado no anime 'Jujutsu Kaisen', criado pelo sensei Gege Akutami. É o meu anime favorito, então decidi desenvolver um jogo baseado nele."
                            : "This game is inspired by the anime 'Jujutsu Kaisen' created by Gege Akutami sensei. It's my favorite anime, so I've decided to develop a game based on it."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Sua missão é silenciar o Gojo-sensei, pois ele está incomodando o Nanamin! Mas cuidado, tocar em qualquer outra pessoa fará você perder uma vida. No entanto, você pode derrotar as maldições que estão atacando o Gojo e tentando roubar suas moedas!"
                            : "Your mission is to silence Gojo sensei as he's annoying Nanamin! But be cautious, tapping on anyone else will cost you a life. However, you can defeat the curses attacking Gojo and trying to steal your coins!"
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Estou aberto a qualquer ideia ou sugestão que você possa ter, então sinta-se à vontade para compartilhá-las comigo."
                            : "I'm open to any ideas or suggestions you might have, so please share them with me."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Gêneros: Indie, Clicker, Jujutsu"
                            : "Genres: Indie, Clicker, Jujutsu"
                        }
                        <br />
                        <br />
                        <p>
                            <span>
                                Link: <a href="https://mechanical-brain.itch.io/tapgojo" target="_blank" rel="noopener noreferrer">Tap Gojo</a>
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
                        <li>{language === "pt" ? "Clicker" : "Clicker"}</li>
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

export default TapGojo;
