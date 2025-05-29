import React from 'react'
import ProductCard from './ProductCard'
import tenis from "../assets/tenisCard.png"

const ProductListing = ({quantidade}) => {
    const produtos = [
        {
          id: "1",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis,
          desconto: true

        },
        {
          id: "2",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
       {
          id: "3",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis
        },
        {
          id: "4",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
        {
          id: "5",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
        {
          id: "6",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis
        },
        {
          id: "7",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis
        },
        {
          id: "8",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis
        },
        {
          id: "9",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
        {
          id: "10",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis
        },
        {
          id: "11",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
        {
          id: "12",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis
        },
        {
          id: "13",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        }, {
          id: "14",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
        {
          id: "15",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 200,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
  ]
  return (
    <>
    <ul className='flex gap-6 flex-wrap'>
     {produtos.slice(0, quantidade).map((produto)=> (
        <ProductCard key={produto.id} img={produto.img} 
        produto={produto.produto} desconto={produto.desconto} categoria={produto.categoria} precoDisconto={produto.precoDisconto} preco={produto.preco}/>
     ))}
    </ul>
    </>
  )
}

export default ProductListing