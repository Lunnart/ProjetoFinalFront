import React from 'react'
import Categorias from '../Components/Categorias'
import CardColecao from '../Components/CardColecao'
import Carrosel from '../Components/Carrosel'
import Section from '../Components/Section'
import ProductListing from '../Components/ProductListing'
import OfertaEspecial from '../Components/OfertaEspecial/OfertaEspecial'

const Home = () => {
  return (
    <>     
     <Carrosel/>
     <Section textLeft>
      <CardColecao/>
     </Section>
     <Section>
      <Categorias/>
     </Section>
    <Section title='Produtos em alta' link textLeft>
      <ProductListing quantidade={8} />
    </Section>
     <OfertaEspecial/>
    </>
  )
}


export default Home