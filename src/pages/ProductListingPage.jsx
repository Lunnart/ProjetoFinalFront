import FiltroGrupo from "../components/FiltroGrupo/FiltroGrupo.jsx";


const ProductListingPage = () => {

  return (
    <div className="bg-[#F9F8FE] ">
      <aside className="bg-white w-[308px] p-[30px]">
        <h1 className="text-dark-gray-2 text-[16px] font-bold mb-[20px]">Filtrar por</h1>
        <hr className="h-[1px] bg-light-gray-2 w-[248px]" />
      
      <FiltroGrupo title="Marca"/>
      <FiltroGrupo title="Estado"/>
      <FiltroGrupo title="Categoria"/>
      <FiltroGrupo title="Gênero"/>
      </aside>
      
    </div>
  )
}

export default ProductListingPage
