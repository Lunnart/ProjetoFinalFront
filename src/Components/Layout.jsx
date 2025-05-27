import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
        <section className="section-container" />
        <div className="text">
          <h4>Melhores ofertas personalizadas</h4>
          <h4 className="font-bold">Melhores ofertas personalizadas</h4>
          <div className="flex">
            <h1 className="font-bold text-[64px] w-[400px] leading-[66px] scroll-ml-5>">Queima de stoque Nike </h1>
            <img className="fogo" src="foguinho.png" alt="fogo" />
          </div>
          <div className="flex-container"></div>
          <h3 className="Inline">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</h3>
          {/* <button type="submit">Ver Ofertas</button> */}
          <button type="button" onclick="alert('Lista de Ofertas:')">Ver Ofertas</button>
        </div>
        <div className="div-content-img" />
        <img className="img-circulo" src="Ornament 11.png" alt="Círculo" />
        <img className="White-Sneakers-PNG-Clipart 1 (2).png" alt="sapato"/>
          <div />

          <section />

        </div>
        )
      }
        export default layout






  {{/*import React from 'react'
import "./Header.css"
import carrinho from "../../assets/carrinho.png"
import logo from "../../assets/logo.png"
import { FaSearch } from 'react-icons/fa'*/}}
