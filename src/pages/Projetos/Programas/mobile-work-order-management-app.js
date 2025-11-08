import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Programas.css";

function OSApp() {
    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
    };

    const images = [
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp1.jpeg`, 
            alt: { 
                pt: "Serviços", 
                en: "Services" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp2.jpeg`, 
            alt: { 
                pt: "Análise e Validação da Ordem de Serviço", 
                en: "Analysis and Validation of the Work Order" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp3.jpeg`, 
            alt: { 
                pt: "Painel de Controle (Home) do Supervisor", 
                en: "Supervisor Control Panel (Home)" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp4.jpeg`, 
            alt: { 
                pt: "Módulo de Aprovação de Reagendamento de Ordens de Serviço", 
                en: "Service Order Rescheduling Approval Module" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp5.jpeg`, 
            alt: { 
                pt: "Painel de Controle - Foco no Status Atualizado", 
                en: "Control Panel - Focus on Updated Status" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp6.jpeg`, 
            alt: { 
                pt: "Tela de Autenticação e Acesso", 
                en: "Authentication and Access Screen" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp7.jpeg`, 
            alt: { 
                pt: "Gerenciamento de Perfil e Segurança", 
                en: "Profile Management and Security" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp8.jpeg`, 
            alt: { 
                pt: "Módulo de Consultas e Histórico de Serviços", 
                en: "Service Inquiry and History Module" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp9.jpeg`, 
            alt: { 
                pt: "Módulo de Execução de Serviços e Acompanhamento de Status", 
                en: "Service Execution and Status Monitoring Module" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp10.jpeg`, 
            alt: { 
                pt: "Módulo de Solicitação de Reagendamento", 
                en: "Rescheduling Request Module" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp11.jpeg`, 
            alt: { 
                pt: "Módulo de Coleta de Evidências", 
                en: "Evidence Collection Module" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp12.jpeg`, 
            alt: { 
                pt: "Módulo de Início da Ordem de Serviço (Check-in)", 
                en: "Service Order Start Module (Check-in)" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp13.jpeg`, 
            alt: { 
                pt: "Módulo de Detalhamento e Cronograma da Ordem de Serviço", 
                en: "Work Order Detailing and Scheduling Module" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp14.jpeg`, 
            alt: { 
                pt: "Módulo de Business Intelligence e Relatórios Gerenciais", 
                en: "Business Intelligence and Management Reporting Module" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp15.jpeg`, 
            alt: { 
                pt: "Módulo de Notificações e Central de Avisos", 
                en: "Notifications Module and Alert Center" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp16.jpeg`, 
            alt: { 
                pt: "Módulo de Comunicação em Tempo Real", 
                en: "Real-Time Communication Module" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp17.jpeg`, 
            alt: { 
                pt: "Integração com o Sistema Operacional: Notificação Push", 
                en: "Operating System Integration: Push Notification" 
            } 
        },
        { 
            src: `${process.env.PUBLIC_URL}/OSApp/OSApp18.jpeg`, 
            alt: { 
                pt: "Módulo de Relatórios Gerenciais: Visão por Empresas", 
                en: "Management Reporting Module: Company View" 
            } 
        },
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                            ? "Durante meu período na Data Campos, atuei no desenvolvimento de um aplicativo móvel para gestão de Ordens de Serviço (OS) voltado a uma empresa prestadora de serviços, com o objetivo de otimizar as operações de campo e o acompanhamento das atividades. O app permite que os colaboradores registrem e gerenciem suas OS com check-in e check-out, oferece uma visão gerencial em tempo real para supervisores aprovarem ou rejeitarem serviços concluídos e integra-se a um sistema web que centraliza a atribuição e o controle das ordens."
                            : "During my time at Data Campos, I contributed to the development of a mobile application for managing Service Orders (SOs) for a local service provider, aimed at optimizing field operations and service monitoring. The app enables employees to record and manage their assigned SOs with check-in and check-out features, provides real-time managerial oversight for supervisors to approve or reject completed services, and integrates with a complementary web system that centralizes the assignment and control of service orders."
                        }
                    </p>
                </section>

                <section className="project-technologies">
                    <h2>{language === "pt" ? "Habilidades" : "Skills"}</h2>
                    <ul>
                        <li>Ionic Framework</li>
                        <li>TypeScript</li>
                        <li>MySQL</li>
                        <li>{language === "pt" ? "Desenvolvimento de API" : "API Development"}</li>
                        <li>{language === "pt" ? "Modelagem de Software" : "Software Modeling"}</li>
                    </ul>
                </section>

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

            {/* Botão de voltar */}
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

export default OSApp;
