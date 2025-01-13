import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Jogos.css";

function CatsCafeteria() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/Cats/Cats.png`, 
            alt: { 
                pt: "Imagem 1 do projeto Cat's Cafeteria", 
                en: "Image 1 of the Cat's Cafeteria project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Cats/Cats2.jpg`, 
            alt: { 
                pt: "Imagem 2 do projeto Cat's Cafeteria", 
                en: "Image 2 of the Cat's Cafeteria project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Cats/Cats3.jpg`, 
            alt: { 
                pt: "Imagem 3 do projeto Cat's Cafeteria", 
                en: "Image 3 of the Cat's Cafeteria project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Cats/Cats4.jpg`, 
            alt: { 
                pt: "Imagem 4 do projeto Cat's Cafeteria", 
                en: "Image 4 of the Cat's Cafeteria project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Cats/Cats5.jpg`, 
            alt: { 
                pt: "Imagem 5 do projeto Cat's Cafeteria", 
                en: "Image 5 of the Cat's Cafeteria project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Cats/Cats6.jpg`, 
            alt: { 
                pt: "Imagem 6 do projeto Cat's Cafeteria", 
                en: "Image 6 of the Cat's Cafeteria project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Cats/Cats7.jpg`, 
            alt: { 
                pt: "Imagem 7 do projeto Cat's Cafeteria", 
                en: "Image 7 of the Cat's Cafeteria project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/Cats/Cats8.jpg`, 
            alt: { 
                pt: "Imagem 8 do projeto Cat's Cafeteria", 
                en: "Image 8 of the Cat's Cafeteria project" 
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
                            ? "Meu primeiro jogo lançado na Steam é um visual novel que aborda questões complexas da vida, integrando mistérios e dramas. O jogo também se destaca por sua charmosa arte em pixel, criando uma experiência visual encantadora. Desenvolvi esse jogo ao longo de 3 anos, começando como um hobby com o desejo de criar o meu próprio 'mundo'. Com isso, me apaixonei pelo desenvolvimento da história, dos personagens e pela programação, encontrando um refúgio ao escrever minha própria e única história."
                            : "My first game released on Steam is a visual novel that addresses complex life issues, integrating mysteries and drama. The game also stands out for its charming pixel art, creating a delightful visual experience. I developed this game over 3 years, starting as a hobby with the desire to create my own 'world'. Through this, I fell in love with the development of the story, the characters, and programming, finding a refuge in writing my own unique story."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Aproveite a atmosfera de uma agradável cafeteria, ouça os problemas e confissões das pessoas, conecte-se com elas. Deixe de lado os dias monótonos e embarque em uma aventura envolvendo o multiverso, demônios e mutantes. Não era para ser apenas uma cafeteria?"
                            : "Enjoy the atmosphere of a nice cafeteria, hear people's problems, confessions, connect to them. Set aside monotonous days and embark on an adventure involving the multiverse, demons, and mutants. Wasn't it supposed to be just a cafeteria?"
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "Gêneros: Romance Visual, 2D, Indie, Suspense"
                            : "Genres: Visual Novel, 2D, Indie, Suspense"
                        }
                        <br />
                        <br />
                        <p>
                            <span>
                                Link: <a href="https://store.steampowered.com/app/2790530/Cats_Cafeteria/" target="_blank" rel="noopener noreferrer">Cat's Cafeteria</a>
                            </span>
                        </p>
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>Python</li>
                        <li>{language === "pt" ? "Desenvolvimento de jogos" : "Game Development"}</li>
                        <li>Pixel Art</li>
                        <li>Atom</li>
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

export default CatsCafeteria;
