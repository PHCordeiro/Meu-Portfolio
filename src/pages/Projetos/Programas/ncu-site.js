import React from 'react';
import './ncu-site.css';

function CatsCafeteria() {
    return (
        <div>
            <header>
                <h1>NCU Site</h1>
            </header>

            <main>
                <section className="project-description">
                    <h2>Descrição do Projeto</h2>
                    <p>Desenvolvi meu primeiro site para a loja que administro junto com minha namorada! O objetivo é apresentar nossos produtos de forma clara e atrativa, proporcionando a melhor experiência possível para nossos clientes.</p>
                </section>

                <section className="project-technologies">
                    <h2>Tecnologias Utilizadas</h2>
                    <ul>
                        <li>WordPress</li>
                        <li>Desenvolvimento Web</li>
                    </ul>
                </section>

                <section className="project-image">
                    <h2>Imagem do Projeto</h2>
                    <img src="/NCU.jpg" alt="Imagem do projeto NCU Site" />
                </section>
            </main>

        </div>
    );
}

export default CatsCafeteria;
