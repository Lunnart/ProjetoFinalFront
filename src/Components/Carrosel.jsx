import React from 'react';
import foguinho from '../assets/foguinho.png';
import circle from '../assets/Ornament 11.png';
import tenis from '../assets/White-Sneakers-PNG-Clipart 1.png';

const Carrosel = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="section-container flex">
                <div className="flex flex-col gap-5 aling-end mb-30 ml-20">
                    <h4 className="font-bold mt-10 text-warning ">Melhores ofertas personalizadas</h4>

                    <div className="flex items-end">
                        <h1 className="font-bold text-[64px] w-[400px] leading-[66px]">
                            Queima de estoque Nike
                        </h1>
                        <img className="h-fit inline" src={foguinho} alt="fogo" />
                    </div>

                    <div className="flex-container flex justify-end mr-2">
                        <h3 className="flex flex-wrap break-words text-dark-gray-2 text-[20px]">
                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </h3>
                       
                    </div>
                    <button className='text-white mt-5 font-bold font-sans rounded-md font-arial w-[220px] py-2.5 bg-[#C92071]' type="submit">Ver Ofertas</button>
                </div>
                <div className="div-content-img mr-5 pr-24 pt-12 relative">
                    <img className="img-circulo absolute pr-12 right-0" src={circle} alt="círculo" />
                    <img src={tenis} alt="sapato" className='relative bottom-15'/>
                </div>
            </div>
        </div>
    );
};

export default Carrosel;