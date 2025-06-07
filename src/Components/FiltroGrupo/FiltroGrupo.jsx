const FiltroGrupo = () => {
  return (
    <div className="w-64 p-4 rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-bold mb-4 border-b pb-2">Filtrar Produtos</h2>

      {/* Marca */}
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2">Marca</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className=" hover:bg-primary focus:ring-pink-300"/>
            Adidas
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071] bg-primary hover:bg-primary" />
            Balenciaga
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071] bg-primary hover:bg-primary" />
            K-Swiss
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071] bg-primary hover:bg-primary" />
            Nike
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071] bg-primary hover:bg-primary" />
            Puma
          </label>
        </div>
      </div>

      {/* Categoria */}
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2">Categoria</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]  hover:bg-primary" />
            Esporte e Lazer
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071] bg-primary hover:bg-primary" />
            Casual
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071] bg-primary hover:bg-primary" />
            Utilitário
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071] bg-primary hover:bg-primary" />
            Corrida
          </label>
        </div>
      </div>

      {/* Gênero */}
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2">Gênero</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]  bg-primary hover:bg-primary" />
            Masculino
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]  bg-primary hover:bg-primary" />
            Feminino
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#C92071]  bg-primary hover:bg-primary" />
            Unissex
          </label>
        </div>
      </div>

      {/* Estado */}
      <div>
        <h3 className="text-base font-semibold mb-2">Estado</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="estado" className="accent-[#C92071] hover:bg-primary" />
            Novo
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="estado" className="accent-[#C92071] bg-primary hover:bg-primary" />
            Usado
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltroGrupo;


