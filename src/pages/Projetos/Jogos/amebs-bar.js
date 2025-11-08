import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function Amebs() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/Amebs/Amebs1.jpg`, 
            alt: { 
                pt: "Imagem 1 do jogo Ameb's Bar", 
                en: "Image 1 of the Ameb's Bar game" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Amebs/Amebs2.jpg`, 
            alt: { 
                pt: "Imagem 2 do jogo Ameb's Bar", 
                en: "Image 2 of the Ameb's Bar game" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Amebs/Amebs3.jpg`, 
            alt: { 
                pt: "Imagem 3 do jogo Ameb's Bar", 
                en: "Image 3 of the Ameb's Bar game" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Amebs/Amebs4.jpg`, 
            alt: { 
                pt: "Imagem 4 do jogo Ameb's Bar", 
                en: "Image 4 of the Ameb's Bar game" 
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
                            ? "Me inscrevi na décima edição da NoNa Jam e fui desafiado a desenvolver um jogo com o tema 'Trabalho em Equipe'. Com isso, decidi criar uma variação do meu jogo Cat's Cafeteria, em que os personagens são amebas que cuidam de um restaurante! Me inspirei em clássicos como Overcooked e o antigo Penguin Diner."
                            : "I joined the tenth edition of NoNa Jam and was challenged to develop a game with the theme 'Teamwork'. So, I decided to create a variation of my game Cat's Cafeteria, where the characters are amoebas running a restaurant! I was inspired by classics like Overcooked and the old Penguin Diner."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "No final, fiquei em 49º lugar entre 80 participantes! Aprendi muito durante o desenvolvimento e identifiquei várias formas de melhorar nos meus próximos projetos. Pretendo ainda polir o Ameb's Bar e lançá-lo na Steam como um jogo comercial."
                            : "In the end, I placed 49th out of 80 participants! I learned a lot during development and found several ways to improve in my future projects. I still plan to polish Ameb's Bar and release it on Steam as a commercial game."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Enquanto isso, já é possível testar a versão feita para a Game Jam pelo link abaixo:"
                            : "In the meantime, you can already play the Game Jam version through the link below:"
                        }
                        <br />
                        <br />
                        <span>
                            Link:{" "}
                            <a
                                href="https://mechanical-brain.itch.io/amebs-bar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ameb's Bar
                            </a>
                        </span>
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>GameMaker</li>
                        <li>{language === "pt" ? "Desenvolvimento de jogos" : "Game Development"}</li>
                        <li>Pixel Art</li>
                        <li>{language === "pt" ? "Design de fases" : "Level Design"}</li>
                        <li>{language === "pt" ? "Lógica de IA cooperativa" : "Cooperative AI Logic"}</li>
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

export default Amebs;
