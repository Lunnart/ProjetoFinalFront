import React from 'react'
import ProductListing from '../Components/ProductListing'
import Section from '../Components/Section'
import FiltroGrupo from "../components/FiltroGrupo/FiltroGrupo.jsx";

const ProductListingPage = () => {

  return (

    <div className="bg-[#F9F8FE] flex">
      <aside className="bg-white w-[308px] p-[30px] h-fit">
        <h1 className="text-dark-gray-2 text-[16px] font-bold mb-[20px]">Filtrar por</h1>
        <hr className="h-[1px] bg-light-gray-2 w-[248px]" />
      <FiltroGrupo/>
      </aside>
      <div>
      <div className='flex justify-end pt-5 pr-[190px]'>
        <select name="" id="" className=''>
          <option value="menor">Ordenar por: menor preço</option>
          <option value="maior">Ordenar por: maior preço</option>
        </select>
        </div>
      <Section title='' textLeft> 
        <ProductListing quantidade={15} />
      </Section>
      </div>
    </div>
  )
}

export default ProductListingPage
