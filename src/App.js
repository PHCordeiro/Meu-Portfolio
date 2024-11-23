import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import CatsCafeteria from './pages/Projetos/Jogos/CatsCafeteria';
import MudMan from './pages/Projetos/Jogos/mud-man';
import ProjetosJogos from './pages/Projetos/Jogos/projetos-jogos';
import ProjetosProgramas from './pages/Projetos/Programas/projetos-programas';
import NCUSite from './pages/Projetos/Programas/ncu-site';
import GreenMagic from './pages/Projetos/Programas/green-magic---system';
import ApiRegistration from './pages/Projetos/Programas/api-registration';
import SimpleLogin from './pages/Projetos/Programas/simple-login';

function App() {
  return (
    <Router basename="/Meu-Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetos-jogos" element={<ProjetosJogos />} />
        <Route path="/Projetos/Jogos/cats-cafeteria" element={<CatsCafeteria />} />
        <Route path="/Projetos/Jogos/mud-man" element={<MudMan />} />
        <Route path="/projetos-programas" element={<ProjetosProgramas />} />
        <Route path="/Projetos/Programas/ncu-site" element={<NCUSite />} />
        <Route path="/Projetos/Programas/green-magic---system" element={<GreenMagic />} />
        <Route path="/Projetos/Programas/api-registration" element={<ApiRegistration />} />
        <Route path="/Projetos/Programas/simple-login" element={<SimpleLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
