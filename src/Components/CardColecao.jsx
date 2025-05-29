import React from 'react'
import blusastarwars from "../assets/blusastarwars.png"
import fone from "../assets/fone.png"
import teniscolecao from "../assets/teniscolecao.png"



const CardColecao = () => {
    return (
        <>

         

            <div className="flex flex-row justify-items-center gap-6 ml-5">


                <div className="relative bg-[#D8E3F2] p-10 rounded-lg shadow-lg w-[405px] h-[251px]">
                    <button className="bg-[#E7FF86] font-bold rounded-xl p-1">30% Off</button>
                    <h2 className="font-bold text-black-600 text-3xl w-[172px] p-1 my-2">Novo drop Supreme</h2>
                    <button className="bg-[#F5F5F5] rounded-md p-3 w-[150px] font-bold text-[#C92071]" >Comprar</button>
                    <img className="absolute right-0 bottom-0" src={blusastarwars} alt="" />
                </div>

                <div className="relative bg-[#D8E3F2] p-10 rounded-lg shadow-lg w-[405px] h-[251px]">
                    <button className="bg-[#E7FF86] font-bold rounded-xl p-1">30% Off</button>
                    <h2 className="font-bold text-black-600 text-3xl w-1/2 my-2">Coleção Adidas</h2>
                    <button className="bg-[#F5F5F5] rounded-md p-3 w-[150px] font-bold text-[#C92071]" >Comprar</button>
                    <img className="absolute right-0 bottom-0" src={teniscolecao} alt="" />
                </div >

                <div className="relative bg-[#D8E3F2] p-10 rounded-lg shadow-lg w-[405px] h-[251px]">
                    <button className="bg-[#E7FF86] font-bold rounded-xl p-2">30% Off</button>
                    <h2 className="font-bold text-black-600 text-3xl w-[140px] my-2">Novo Beat Bass</h2>
                    <button className="bg-[#F5F5F5] rounded-md p-3 w-[150px] font-bold text-[#C92071]">Comprar</button>
                    <img className="absolute right-0 bottom-0" src={fone} alt="" />
                </div>
            </div>
        </>
    )
}

export default CardColecao
