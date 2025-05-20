import React from 'react'
import foguinho from '../assets/foguinho.png'
import circle from '../assets/Ornament 11.png'
import tenis from '../assets/White-Sneakers-PNG-Clipart 1.png'
import './carrosel.css'

const Carrosel = () => {
    return (
    
    <carrosel>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100"/>

    <div className="section-container"/>
        <div className="text"/>
            <h4>Melhores ofertas personalizadas</h4>
            <h4 className="font-bold">Melhores ofertas personalizadas</h4>
            <div className="flex"/>
            <h1 className="font-bold text-[64px] w-[400px] leading-[66px] scroll-ml-5>">Queima de stoque Nike </h1>
            <img className="fogo" src={foguinho} alt="fogo"/>
            <div/>
            
            < div className = "flex-container" />
            <h3 className="Inline">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</h3>
            <button type="submit">Ver Ofertas</button>
            
        <div/>
    <div className="div-content-img"/>
        <img className="img-circulo" src={Ornament} alt="círculo"/>
        <img src={tenis} alt="sapato"/>
        <div/>
    </carrosel>
    )
    }

export default Carrosel
