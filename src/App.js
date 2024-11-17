// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import CatsCafeteria from './pages/Projetos/Jogos/CatsCafeteria';
import MudMan from './pages/Projetos/Jogos/mud-man';
import NCUSite from './pages/Projetos/Programas/ncu-site';
import ProjetosJogos from './pages/Projetos/Jogos/projetos-jogos';
import ProjetosProgramas from './pages/Projetos/Programas/projetos-programas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/Projetos/Jogos/cats-cafeteria" element={<CatsCafeteria />} />
        <Route path="/Projetos/Jogos/mud-man" element={<MudMan />} />
        <Route path="/Projetos/Programas/ncu-site" element={<NCUSite />} />
        <Route path="/projetos-jogos" element={<ProjetosJogos />} />
        <Route path="/projetos-programas" element={<ProjetosProgramas />} />
      </Routes>
    </Router>
  );
}

export default App;
