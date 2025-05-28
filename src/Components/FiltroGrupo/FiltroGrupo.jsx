import './FiltroGrupo.css';

const FiltroGrupo = () => {
  return (
    <aside className="filtro-container">
      <h2 className="titulo">Filtrar por</h2>

      {/* Marca */}
      <div className="filtro-bloco">
        <h3>Marca</h3>
        <div className="filtro-opcoes">
          <label><input type="checkbox" /> Adidas</label>
          <label><input type="checkbox" /> Balenciaga</label>
          <label><input type="checkbox" /> K-Swiss</label>
          <label><input type="checkbox" /> Nike</label>
          <label><input type="checkbox" /> Puma</label>
        </div>
      </div>

      {/* Categoria */}
      <div className="filtro-bloco">
        <h3>Categoria</h3>
        <div className="filtro-opcoes">
          <label><input type="checkbox" /> Esporte e Lazer</label>
          <label><input type="checkbox" /> Casual</label>
          <label><input type="checkbox" /> Utilitário</label>
          <label><input type="checkbox" /> Corrida</label>
        </div>
      </div>

      {/* Gênero */}
      <div className="filtro-bloco">
        <h3>Gênero</h3>
        <div className="filtro-opcoes">
          <label><input type="checkbox" /> Masculino</label>
          <label><input type="checkbox" /> Feminino</label>
          <label><input type="checkbox" /> Unissex</label>
        </div>
      </div>

      {/* Estado */}
      <div className="filtro-bloco">
        <h3>Estado</h3>
        <div className="filtro-opcoes">
          <label><input type="radio" name="estado" /> Novo</label>
          <label><input type="radio" name="estado" /> Usado</label>
        </div>
      </div>
    </aside>
  );
};

export default FiltroGrupo;
