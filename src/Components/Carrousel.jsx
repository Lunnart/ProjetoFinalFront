import { Link } from "react-router-dom"
import foguinho from "../assets/foguinho.png"
import Ornament from "../assets/Ornament.png"
import Tenis from "../assets/tenis.png"


const Carrousel = () => {
    return (
        <section className="section-container">
            <div className="text" />
            <h4 className="font-bold">Melhores ofertas personalizadas</h4>

            <div className="flex" />
            <h1 className="font-bold text-[64px] w-[400px] leading-[66px] scroll-ml-5>">Queima de stoque Nike </h1>
            <img className="fogo" src={foguinho} alt="fogo" />
            <div />


            <h3 className="Inline">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</h3>

            <Link type="button" to="/produtos">Ver Ofertas</Link>
            <div />
            <div className="div-content-img flex" >
            <img className="img-circulo" src={Ornament} alt="Círculo" />
            <img src={Tenis} alt="sapato" />
            </div>
        </section>
    )
}

export default Carrousel
