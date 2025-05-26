import React from 'react'
import tenis from "../assets/tenisCard.png"

const ProductCard = () => {


const produtos = [
      {
        id: "1",
        produto: "K-Swiss V8 - Masculino",
        categoria: "Tenis",
        preco: 200,
        precoDisconto: 100,
        img: tenis
      },
      {
        id: "2",
        produto: "K-Swiss V8 - Masculino",
        categoria: "Tenis",
        preco: 200,
        precoDisconto: 100,
        img: tenis
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
        img: tenis
      },
      {
        id: "5",
        produto: "K-Swiss V8 - Masculino",
        categoria: "Tenis",
        preco: 200,
        precoDisconto: 100,
        img: tenis
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
        img: tenis
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
        img: tenis
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
        img: tenis
      }, {
        id: "14",
        produto: "K-Swiss V8 - Masculino",
        categoria: "Tenis",
        preco: 200,
        precoDisconto: 100,
        img: tenis
      },
      {
        id: "15",
        produto: "K-Swiss V8 - Masculino",
        categoria: "Tenis",
        preco: 200,
        precoDisconto: 100,
        img: tenis
      },
]


  return (
    <>
    <section className='ml-8 bg-[#F9F8FE]'>
        <h1 className='font-bold text-2xl mb-5'></h1>
        <ul className='flex gap-20'>
            {produtos.map((item)=> (
                <li key={item.id} className='p-2'>
                    <div className='bg-[#fdfdfd] h-[321px] w-[292px] flex items-center justify-center rounded-sm '>
                        <img src={item.img} alt={item.produto} />
                    </div>
                    <div>
                        <h2 className="text-xs">{item.categoria}</h2>
                        <h2 className='text-2xl'>{item.produto}</h2>
                        <p className="text-2xl">{item.preco} <span className="font-bold">${item.precoDisconto}</span></p>
                    </div>
                </li>
            ))}
        </ul>
    </section>
    </>
  )
}

export default ProductCard