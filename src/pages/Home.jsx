import React from 'react'
import OfertaEspecial from '../components/OfertaEspecial/OfertaEspecial'
import Categorias from '../Components/Categorias'
import CardColecao from '../Components/CardColecao'
import Carrosel from '../Components/Carrosel'
import Section from '../Components/Section'
import ProductListing from '../Components/ProductListing'

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
    <Section textLeft title='Produtos em alta' link>
      <ProductListing quantidade={8} />
    </Section>
     <OfertaEspecial/>
    </>
  )
}


export default Home