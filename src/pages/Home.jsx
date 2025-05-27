cards-jairo
import React from 'react'
import OfertaEspecial from '../components/OfertaEspecial/OfertaEspecial'
import Categorias from '../Components/Categorias'
import CardColecao from '../Components/CardColecao'main
import Carrosel from '../Components/Carrosel'
import ProductCard from '../Components/ProductCard'

const Home = () => {
  return (
    <>     
     <Carrosel/>
     <CardColecao/>
     <Categorias/>
     <ProductCard/>
     <div>Oferta Especial</div>
    </>
  )
}


export default Home