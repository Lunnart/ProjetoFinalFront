import React from 'react'
import Carrosel from '../Components/Carrosel'
import ProductCard from '../Components/ProductCard'

const Home = () => {
  return (
    <>
     <Carrosel/>
     <div>Cards coleção</div>
     <div>Categoria</div>
     <ProductCard/>
     <div>Oferta Especial</div>
    </>
  )
}

export default Home
