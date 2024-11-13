// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import CatsCafeteria from './pages/Projetos/CatsCafeteria';
import NCUSite from './pages/Projetos/ncu-site';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/cats-cafeteria" element={<CatsCafeteria />} />
        <Route path="/projetos/ncu-site" element={<NCUSite />} />
      </Routes>
    </Router>
  );
}

export default App;
