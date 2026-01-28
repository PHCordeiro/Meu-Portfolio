import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programas.css";

function HeroDex() {
    const [language, setLanguage] = useState("pt");
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/HeroDex/HeroDex1.png`, 
            alt: { 
                pt: "Imagem 1", 
                en: "Image 1" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/HeroDex/HeroDex2.png`, 
            alt: { 
                pt: "Imagem 2", 
                en: "Image 2" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/HeroDex/HeroDex3.png`, 
            alt: { 
                pt: "Imagem 3", 
                en: "Image 3" 
            } 
        },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="programa-page">
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
                {/* Descrição do projeto */}
                <section className="project-description">
                    <h2>{language === "pt" ? "Descrição do Projeto" : "Project Description"}</h2>
                <p>
                {language === "pt"
                    ? "HeroDex é um projeto desenvolvido com o objetivo de explorar o consumo de uma API pública em um sistema simples e funcional."
                    : "HeroDex is a project developed with the purpose of exploring the consumption of a public API within a simple and functional system."
                }
                </p>
                <br />
                {language === "pt"
                    ? "A aplicação consiste em um site com uma interface de busca intuitiva, capaz de retornar informações detalhadas sobre heróis disponíveis na SuperHero API, mantida no repositório akabab e distribuída via jsDelivr. Embora o banco de dados de heróis seja limitado ao escopo dessa API, ele atende plenamente à proposta do projeto, que foi testar a integração com uma fonte externa de dados, bem como a organização e exibição dessas informações em uma aplicação web."
                    : "The application consists of a website with an intuitive search interface, capable of returning detailed information about heroes available in the SuperHero API, maintained in the akabab repository and distributed via jsDelivr. Although the hero database is limited to the scope of this API, it fully meets the project’s proposal, which was to test integration with an external data source, as well as the organization and presentation of this information in a web application."
                }
                <br />
                <br />
                {language === "pt"
                    ? "Embora o banco de dados de heróis seja limitado ao escopo dessa API, ele atende plenamente à proposta do projeto, que foi testar a integração com uma fonte externa de dados, bem como a organização e exibição dessas informações em uma aplicação web."
                    : "Although the hero database is limited to the scope of this API, it fully meets the project’s proposal, which was to test integration with an external data source, as well as the organization and presentation of this information in a web application."
                }
                <br />
                <br />
                <p className="project-link">
                {language === "pt" ? "Link para acesso:" : "Access link:"}{" "}
                <a
                    href="https://hero-dex-nine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://hero-dex-nine.vercel.app/
                </a>
                </p>
                </section>

                {/* Tecnologias utilizadas */}
                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>API Consumption</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>{language === "pt" ? "Interface Limpa" : "Clean Interface"}</li>
                    </ul>
                </section>

                {/* Galeria de imagens */}
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

            {/* Botão de retorno */}
            <div className="back-button-container">
                <Link to="/projetos-programas">
                    <button className="back-button">
                        {language === "pt" ? "Voltar" : "Back"}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HeroDex;
