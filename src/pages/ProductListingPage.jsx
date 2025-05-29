import React from 'react'
import ProductListing from '../Components/ProductListing'
import Section from '../Components/Section'
import FiltroGrupo from "../components/FiltroGrupo/FiltroGrupo.jsx";

const ProductListingPage = () => {

  return (
    <div className="bg-[#F9F8FE] ">
      <aside className="bg-white w-[308px] p-[30px]">
        <h1 className="text-dark-gray-2 text-[16px] font-bold mb-[20px]">Filtrar por</h1>
        <hr className="h-[1px] bg-light-gray-2 w-[248px]" />
      <FiltroGrupo/>
      </aside>
    
      <Section title='' textLeft>
        <ProductListing quantidade={15} />
      </Section>
    </div>
  )
}

export default ProductListingPage
