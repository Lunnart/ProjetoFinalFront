import React from 'react'
import Carrosel from '../Components/Carrosel'
import Section from '../Components/Section'
import ProductListing from '../Components/ProductListing'

const Home = () => {
  return (
    <>
     <Carrosel/>

     <Section textLeft>
     <div>Cards coleção</div>
     </Section>
     <Section>
     <div>Categoria</div>
     </Section>
    <Section textLeft title='Produtos em alta' link>
      <ProductListing quantidade={8} />
    </Section>

     <div>Oferta Especial</div>
    </>
  )
}

export default Home
