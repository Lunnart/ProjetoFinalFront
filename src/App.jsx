import React from 'react';
import Rotas from "./rotas/Rotas";
import FiltroGrupo from './componentes/FiltroGrupo/FiltroGrupo';

function App() {
  return (
    <div className="App">
      {/* Componente de Filtros (aside) */}
      <FiltroGrupo />

      {/* Suas rotas para páginas */}
      <Rotas />
    </div>
  );
}

export default App;
