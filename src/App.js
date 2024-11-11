// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
//Importar a página de projeto individual
import ProjetoDetalhes from './pages/ProjetoDetalhes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projeto/:id" element={<ProjetoDetalhes />} />
      </Routes>
    </Router>
  );
}

export default App;
