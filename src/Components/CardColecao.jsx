import React from 'react'
import blusastarwars from "../assets/blusastarwars.png"
import fone from "../assets/fone.png"
import teniscolecao from "../assets/teniscolecao.png"


const CardColecao = () => {
    return (
        <>
            <h3 className="text-dark-gray-2 font-bold ml-5">Coleções em destaque</h3>

            <div className="flex flex-row gap-6 ml-5" />

            <div className="basis-sm bg-[#D8E3F2] w-405 H-251 p-10 rounded-lg shadow-lg" >
            <button className="bg-[#E7FF86]">30% Off</button>
            <h2 className="font-bold text-black-600 dark:text-sky-400">Novo drop Supreme</h2>
            <button className="bg-[#F5F5F5] text-[#C92071]" >Comprar</button>
            <img className="mr-0% mb-0" src={blusastarwars} alt="" />
        </div >

        <div className="basis-sm bg-[#D8E3F2]  w-80 p-10 rounded-lg shadow-lg">
        <button className="bg-[#E7FF86]">30% Off</button>
        <h2 className="font-bold text-black-600 dark:text-sky-400">Coleção Adidas</h2>
        <button className="bg-[#F5F5F5] text-[#C92071]" >Comprar</button>
        <img src={teniscolecao} alt=""/>
        </div >
        <div className="basis-sm bg-[#D8E3F2] w-80 p-10 rounded-lg shadow-lg"/>
            <button className="bg-[#E7FF86]">30% Off</button>
            <h2 className="font-bold text-black-600 dark:text-sky-400">Novo Beat Bass</h2>
            <button className="bg-[#F5F5F5] text-[#C92071]" >Comprar</button>
            <img src={fone} alt=""/>
        <div/>

  </>
  )
}

export default CardColecao
