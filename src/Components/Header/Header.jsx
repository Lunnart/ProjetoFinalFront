import React from 'react'
import "./Header.css"
import carrinho from "../../assets/carrinho.png"
import logo from "../../assets/logo.png"
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        <header>
    <div className="p1">
        <img src={logo} alt="" height="44px" width="253"/>
        <form className="form-header">
            <input type="text" id="text" name="Pesquisar" placeholder="Pesquisar produto..." className='text-light-gray h-12'/>
            <button className="bg-white h-12 flex">
              <FaSearch color='gray'/>
            </button>
        </form>
        <label  className="text-light-gray" for="text"><a href="#Cadastro">Cadastre-se</a></label>
        <button className=""         type="button" onclick="alert('Produtos')">Entrar</button>
         {/* <a href="#" className="button">Entrar</a> */}
        <img src={carrinho} alt="carrinho"/>
    </div>

    <div className="nav">

        <nav>
            <ul className="header">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Produtos">Produtos</a></li>
                <li><a href="#Categorias">Categorias</a></li>
                <li><a href="#Meus Pedidos">Meus Pedidos</a></li>
            </ul>
        </nav>

    </div>
</header>
    </div>
  )
}

export default Header
