import React from 'react'
import "./Header.css"
import carrinho from "../../assets/carrinho.png"
import logo from "../../assets/logo.png"
import { FaSearch } from 'react-icons/fa'




const Header = () => {
  return (
    <div>
        <header>
    <div className="text-white flex justify-around my-[40px] mx-[30px]">
        <img src={logo} alt="" height="44px" width="253"/>
        <form className="form-header">
            <input type="text" id="text" name="Pesquisar" placeholder="Pesquisar produto..." className='text-light-gray h-12'/>
            <button className="bg-white h-12 flex justify-end items-center">
              <FaSearch color='gray'/>
            </button>
        </form>
        <label  className="text-light-gray" htmlFor="text"><a href="#Cadastro">Cadastre-se</a></label>
        <button className=""  type="button" >Entrar</button>
         {/* <a href="#" className="button">Entrar</a> */}
        <img src={carrinho} alt="carrinho"/>
    </div>

    <div className="nav ml-15 p-[15 72 15 49] font-medium">

        <nav>
            <ul className="header ml-[10] p-[15 72 15 49] font-medium flex items-center gap-[36px] hover:text-pink-500">
                <li><a className='hover:underline text-primary' href="#Home">Home</a></li>
                <li><a className='hover:underline text-primary'href="#Produtos">Produtos</a></li>
                <li><a className='hover:underline text-primary' href="#Categorias">Categorias</a></li>
                <li><a className='hover:underline text-primary' href="#Meus Pedidos">Meus Pedidos</a></li>
            </ul>
        </nav>

    </div>
</header>
    </div>
  )
}

export default Header
