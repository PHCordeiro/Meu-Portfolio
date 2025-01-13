import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import CatsCafeteria from './pages/Projetos/Jogos/CatsCafeteria';
import MudMan from './pages/Projetos/Jogos/mud-man';
import PongClone from './pages/Projetos/Jogos/pong-clone';
import TodouVSMeiMei from './pages/Projetos/Jogos/todou-vs-mei-mei';
import TapGojo from './pages/Projetos/Jogos/tap-gojo';
import Politics from './pages/Projetos/Jogos/politics---stop-the-assembleia';
import Passaros from './pages/Projetos/Jogos/bird-game';
import Nishimiya from './pages/Projetos/Jogos/flappy-nishimiya';
import ProjetosJogos from './pages/Projetos/Jogos/projetos-jogos';
import ProjetosProgramas from './pages/Projetos/Programas/projetos-programas';
import NCUSite from './pages/Projetos/Programas/ncu-site';
import GreenMagic from './pages/Projetos/Programas/green-magic---system';
import ApiRegistration from './pages/Projetos/Programas/api-registration';
import SimpleLogin from './pages/Projetos/Programas/simple-login';
import Experiencias from './pages/Experiencias/Experiencias';
import DragonPrince from './pages/Projetos/Programas/dragon-prince-wiki';
import BPSOIS from './pages/Projetos/Programas/bpsois-tool';

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
          <Route path="/Projetos/Jogos/pong-clone" element={<PongClone />} />
          <Route path="/Projetos/Jogos/todou-vs-mei-mei" element={<TodouVSMeiMei />} />
          <Route path="/Projetos/Jogos/tap-gojo" element={<TapGojo />} />
          <Route path="/Projetos/Jogos/politics---stop-the-assembleia" element={<Politics />} />
          <Route path="/Projetos/Jogos/bird-game" element={<Passaros />} />
          <Route path="/Projetos/Jogos/flappy-nishimiya" element={<Nishimiya />} />
          <Route path="/projetos-programas" element={<ProjetosProgramas />} />
          <Route path="/Projetos/Programas/ncu-site" element={<NCUSite />} />
          <Route path="/Projetos/Programas/green-magic---system" element={<GreenMagic />} />
          <Route path="/Projetos/Programas/api-registration" element={<ApiRegistration />} />
          <Route path="/Projetos/Programas/simple-login" element={<SimpleLogin />} />
          <Route path="/Projetos/Programas/dragon-prince-wiki" element={<DragonPrince />} />
          <Route path="/Projetos/Programas/bpsois-tool" element={<BPSOIS />} />
          <Route path="/Experiencias/Experiencias" element={<Experiencias />} />
        </Routes>
      </Router>
  );
}

export default App;
