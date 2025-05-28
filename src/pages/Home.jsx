cards-jairo
import React from 'react'
import OfertaEspecial from '../components/OfertaEspecial/OfertaEspecial'
import Categorias from '../Components/Categorias'
import CardColecao from '../Components/CardColecao'
import Carrosel from '../Components/Carrosel'
import ProductCard from '../Components/ProductCard'

const Home = () => {
  return (
    <>     
     <Carrosel/>
     <CardColecao/>
     <Categorias/>
     <ProductCard/>
     <OfertaEspecial/>
    </>
  )
}


export default Home