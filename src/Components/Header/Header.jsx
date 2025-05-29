import React from 'react'
import carrinho from "../../assets/carrinho.png"
import logo from "../../assets/logo.png"
import { FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <header>
                <div className="text-white flex justify-around items-center my-[40px] mx-[30px]">
                    <img src={logo} alt="" className='' />
                    <form className="flex w-[40%]">
                        <input type="text" id="text" name="Pesquisar" placeholder="Pesquisar produto..." className=' border-[1px] border-transparent rounded-l-lg text-light-gray bg-light-gray-3 w-[80%] h-12 p-3' />
                        <button className="bg-light-gray-3  h-12 flex justify-end items-center w-20 p-5 rounded-r-lg">
                            <FaSearch color='gray' />
                        </button>
                    </form>
                    <label className="text-light-gray font-light" htmlFor="text"><a className='hover:underline font-normal text-dark-gray-2' href="#Cadastro">Cadastre-se</a></label>
                    <button className="bg-primary text-white font-bold rounded-lg p-2 text-center w-[114px]" type="button" >Entrar</button>
                    <img className='object-contain' src={carrinho} alt="carrinho" />
                </div>

                <div className="nav ml-17 p-[15 72 15 49] font-medium p-5">
                    <nav>
                        <ul className="header ml-[10] p-[15 72 15 49] font-medium flex items-center gap-[36px] hover: bg-50 ">
                            <li><a className='underline font-bold hover:text-primary text-dark-gray-2 decoration-2 underline-offset-[3px]' href="#Home">Home</a></li>
                            <li><a className='hover:underline hover:font-bold hover:text-primary  text-dark-gray-2 font-normal decoration-2 underline-offset-[3px]' href="#Produtos">Produtos</a></li>
                            <li><a className='hover:underline hover:font-bold hover:text-primary text-dark-gray-2 font-normal decoration-2 underline-offset-[3px]' href="#Categorias">Categorias</a></li>
                            <li><a className='hover:underline hover:font-bold hover:text-primary text-dark-gray-2 font-normal decoration-2 underline-offset-[3px]' href="#Meus Pedidos">Meus Pedidos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
