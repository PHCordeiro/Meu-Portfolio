import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programas.css";

function GreenMagic() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { src: "/GreenMagic/GreenMagic1.jpg", alt: { pt: "Imagem 1 do projeto GreenMagic", en: "Image 1 of the GreenMagic project" } },
        { src: "/GreenMagic/GreenMagic2.jpg", alt: { pt: "Imagem 2 do projeto GreenMagic", en: "Image 2 of the GreenMagic project" } },
        { src: "/GreenMagic/GreenMagic3.jpg", alt: { pt: "Imagem 3 do projeto GreenMagic", en: "Image 3 of the GreenMagic project" } },
        { src: "/GreenMagic/GreenMagic4.jpg", alt: { pt: "Imagem 4 do projeto GreenMagic", en: "Image 4 of the GreenMagic project" } },
        { src: "/GreenMagic/GreenMagic5.jpg", alt: { pt: "Imagem 5 do projeto GreenMagic", en: "Image 5 of the GreenMagic project" } },
        { src: "/GreenMagic/GreenMagic6.jpg", alt: { pt: "Imagem 6 do projeto GreenMagic", en: "Image 6 of the GreenMagic project" } },
        { src: "/GreenMagic/GreenMagic7.jpg", alt: { pt: "Imagem 7 do projeto GreenMagic", en: "Image 7 of the GreenMagic project" } },
        { src: "/GreenMagic/GreenMagic8.jpg", alt: { pt: "Imagem 8 do projeto GreenMagic", en: "Image 8 of the GreenMagic project" } },
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
                            ? "Com o objetivo de aprimorar minhas habilidades em desenvolvimento de sistemas, desenvolvi um projeto utilizando a ferramenta de desenvolvimento rápido de aplicações (RAD) ScriptCase. Neste projeto, criei o sistema para uma loja fictícia, chamada 'Green Magic'. O sistema oferece funcionalidades de login seguro, cadastro de vendas, clientes e produtos, além de consultas em grid para análise do comportamento dos dados. O sistema inclui, ainda, um dashboard inicial, que fornece uma visão abrangente do desempenho do negócio."
                            : "With the aim of enhancing my skills in system development, I created a project using the rapid application development (RAD) tool ScriptCase. In this project, I developed a system for a fictional store called 'Green Magic'. The system offers features such as secure login, registration of sales, customers, and products, as well as grid-based queries for analyzing data behavior. Additionally, the system includes an initial dashboard that provides a comprehensive overview of business performance."
                        }
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>ScriptCase</li>
                        <li>PHP</li>
                        <li>MySQL</li>
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
                <Link to="/projetos-programas">
                    <button className="back-button">
                        {language === "pt" ? "Voltar" : "Back"}
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default GreenMagic;
