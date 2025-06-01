const FiltroGrupo = () => {
  return (
    <div className="w-64 p-4 rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-bold mb-4 border-b pb-2">Filtrar Produtos</h2>

      {/* Marca */}
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2">Marca</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Adidas
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Balenciaga
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            K-Swiss
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Nike
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Puma
          </label>
        </div>
      </div>

      {/* Categoria */}
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2">Categoria</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Esporte e Lazer
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Casual
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Utilitário
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Corrida
          </label>
        </div>
      </div>

      {/* Gênero */}
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2">Gênero</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Masculino
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Feminino
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]" />
            Unissex
          </label>
        </div>
      </div>

      {/* Estado */}
      <div>
        <h3 className="text-base font-semibold mb-2">Estado</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="estado" className="accent-[#C92071]" />
            Novo
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="estado" className="accent-[#C92071]" />
            Usado
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltroGrupo;
