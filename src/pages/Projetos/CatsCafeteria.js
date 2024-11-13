import React from 'react';

function CatsCafeteria() {
    return (
        <div>
            <header>
                <h1>Cat's Cafeteria</h1>
            </header>

            <main>
                <section className="project-description">
                    <h2>Descrição do Projeto</h2>
                    <p>Meu primeiro jogo lançado na Steam é um visual novel que aborda questões complexas da vida, integrando mistérios e dramas. O jogo também se destaca por sua charmosa arte em pixel, criando uma experiência visual encantadora.</p>
                </section>

                <section className="project-technologies">
                    <h2>Tecnologias Utilizadas</h2>
                    <ul>
                        <li>Python</li>
                        <li>Desenvolvimento de jogos</li>
                        <li>Pixel Art</li>
                    </ul>
                </section>

                <section className="project-image">
                    <h2>Imagem do Projeto</h2>
                    <img src="/Cats.png" alt="Imagem do projeto Cat's Cafeteria" />
                </section>
            </main>

            <footer>
                <p><a href="/projetos">Voltar para a página de Projetos</a></p>
            </footer>
        </div>
    );
}

export default CatsCafeteria;
