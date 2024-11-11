// src/pages/ProjetoDetalhes.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProjetoDetalhes() {
  const { id } = useParams();

  // Aqui você pode carregar os dados do projeto usando o ID, de uma API ou do seu state
  return (
    <div>
      <h2>Detalhes do Projeto {id}</h2>
      {/* Adicione os detalhes específicos do projeto aqui */}
    </div>
  );
}

export default ProjetoDetalhes;
