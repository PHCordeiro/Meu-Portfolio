import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programas.css";

function BPSOIS() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/1.png`, 
            alt: { 
                pt: "Imagem 1 do projeto BPSOIS", 
                en: "Image 1 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/2.png`, 
            alt: { 
                pt: "Imagem 2 do projeto BPSOIS", 
                en: "Image 2 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/3.png`, 
            alt: { 
                pt: "Imagem 3 do projeto BPSOIS", 
                en: "Image 3 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/4.png`, 
            alt: { 
                pt: "Imagem 4 do projeto BPSOIS", 
                en: "Image 4 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/5.png`, 
            alt: { 
                pt: "Imagem 5 do projeto BPSOIS", 
                en: "Image 5 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/6.png`, 
            alt: { 
                pt: "Imagem 6 do projeto BPSOIS", 
                en: "Image 6 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/7.png`, 
            alt: { 
                pt: "Imagem 7 do projeto BPSOIS", 
                en: "Image 7 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/8.png`, 
            alt: { 
                pt: "Imagem 8 do projeto BPSOIS", 
                en: "Image 8 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/9.png`, 
            alt: { 
                pt: "Imagem 9 do projeto BPSOIS", 
                en: "Image 9 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/10.png`, 
            alt: { 
                pt: "Imagem 9 do projeto BPSOIS", 
                en: "Image 9 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/11.png`, 
            alt: { 
                pt: "Imagem 9 do projeto BPSOIS", 
                en: "Image 9 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/12.png`, 
            alt: { 
                pt: "Imagem 9 do projeto BPSOIS", 
                en: "Image 9 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/13.png`, 
            alt: { 
                pt: "Imagem 9 do projeto BPSOIS", 
                en: "Image 9 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/14.png`, 
            alt: { 
                pt: "Imagem 9 do projeto BPSOIS", 
                en: "Image 9 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/15.png`, 
            alt: { 
                pt: "Imagem 9 do projeto BPSOIS", 
                en: "Image 9 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/16.png`, 
            alt: { 
                pt: "Imagem 9 do projeto BPSOIS", 
                en: "Image 9 of the BPSOIS project" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/BPSOIS/17.png`, 
            alt: { 
                pt: "Imagem 9 do projeto BPSOIS", 
                en: "Image 9 of the BPSOIS project" 
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
                            ? "O projeto integra a análise de modelos UML (Unified Modeling Language), o desenvolvimento de modelos preditivos para saúde e a otimização de processos organizacionais por meio do Método GQM e da Mineração de Texto. Na análise UML, diagramas de caso de uso foram utilizados para identificar pontos de interoperabilidade entre sistemas e aprimorar a comunicação. Uma ferramenta foi desenvolvida para extrair informações de arquivos XMI, como Atores, Casos de Uso e Associações, organizando esses dados de forma estruturada para facilitar a compreensão e otimização dos processos. Além disso, foi realizado um estudo comparativo de ferramentas de análise de dados para criar um modelo preditivo capaz de identificar novos casos de diabetes, contribuindo para a saúde preventiva e o diagnóstico clínico."
                            : "The project integrates the analysis of UML (Unified Modeling Language) models, the development of predictive models for healthcare, and the optimization of organizational processes through the GQM Method and Text Mining. In the UML analysis, use case diagrams were used to identify interoperability points between systems and enhance communication. A tool was developed to extract information from XMI files, such as Actors, Use Cases, and Associations, organizing this data in a structured way to facilitate understanding and process optimization. Additionally, a comparative study of data analysis tools was conducted to create a predictive model capable of identifying new cases of diabetes, contributing to preventive healthcare and clinical diagnosis."
                        }
                        <br />
                        <br />
                        {language === "pt"
                            ? "O projeto também aborda a melhoria dos processos organizacionais ao integrar KPIs, rastros de execução e dados extraídos de texto. A análise de métricas como conformidade e tempos de execução permitiu identificar gargalos e direcionar a alocação eficiente de recursos em setores críticos. Adicionalmente, funcionalidades foram implementadas para correlacionar setores de trâmites e atores de processos BPMN, proporcionando uma visão abrangente dos fluxos organizacionais e potencializando melhorias. Os resultados alcançados demonstram avanços significativos em interoperabilidade, eficiência operacional e aplicação de modelos preditivos em saúde."
                            : "The project also addresses the improvement of organizational processes by integrating KPIs, execution traces, and text-extracted data. The analysis of metrics such as compliance and execution times allowed the identification of bottlenecks and guided the efficient allocation of resources in critical sectors. Furthermore, functionalities were implemented to correlate workflow sectors and BPMN process actors, providing a comprehensive view of organizational workflows and enhancing improvements. The results achieved demonstrate significant advancements in interoperability, operational efficiency, and the application of predictive models in healthcare."
                        }
                        <br />
                        <br />
                        <p>
                            <span>
                                Link: <a href="https://www.linkedin.com/in/pedro-henrique-de-souza-seabra-mattos-cordeiro-709b3327a/?profileId=ACoAAEQnrzkByy__GPCoDCab5DfJuC6dZe1CTCA" target="_blank" rel="noopener noreferrer">BPSOIS</a>
                            </span>
                        </p>
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>Python</li>
                        <li>Django</li>
                        <li>{language === "pt" ? "Mineração de Dados" : "Data Mining"}</li>
                        <li>{language === "pt" ? "Manipulação de Dados" : "Data Manipulation"}</li>
                        <li>Ubuntu</li>
                        <li>XML - UML</li>
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

export default BPSOIS;
