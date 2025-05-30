import React, { useState } from 'react'
import ProductCard from './ProductCard'
import tenis from "../assets/tenisCard.png"

const ProductListing = ({quantidade}) => {
  const [ordenacao, setOrdenacao] = useState("padrao")
  const [produtos, setProdutos] = useState([
        {
          id: "1",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 150,
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
          preco: 170,
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
          preco: 210,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
        {
          id: "12",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 220,
          precoDisconto: 100,
          img: tenis
        },
        {
          id: "13",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 230,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        }, {
          id: "14",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 240,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
        {
          id: "15",
          produto: "K-Swiss V8 - Masculino",
          categoria: "Tenis",
          preco: 250,
          precoDisconto: 100,
          img: tenis,
          desconto: true
        },
  ])

   const ordenarProdutos = (tipo) => {
    let novaLista;
    if (tipo === "menor") {
      novaLista = [...produtos].sort((a, b) => a.preco - b.preco);
    } else if (tipo === "maior") {
      novaLista = [...produtos].sort((a, b) => b.preco - a.preco);
    } else {
      return
    }
    setProdutos(novaLista);
  };

  const handleChange = (e) => {
    const tipo = e.target.value;
    setOrdenacao(tipo);
    ordenarProdutos(tipo);
  };

  return (
    <>
    <div className='flex justify-end pt-5'>
        <select name="" id="" className='rounded-md' value={ordenacao} onChange={handleChange}>
          <option className='' value="padrao">Ordenar por preco</option>
          <option value="menor">Ordenar por: menor preço</option>
          <option value="maior">Ordenar por: maior preço</option>
        </select>
    </div>
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