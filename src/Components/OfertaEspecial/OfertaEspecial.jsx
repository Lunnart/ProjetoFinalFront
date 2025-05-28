import "./OfertaEspecial.css"
import tenis from "../../assets/tenisOferta.png"
import elipse from '../../assets/elipse.png'

const OfertaEspecial = () => {
    return (
        <section className="container-geral">
            <div className="ofertas-personalizadas">
                <div className="air-jordan relative">
                    <img src={elipse} alt="" className="absolute" />
                    <img src={tenis} alt="Air Jordan edição de colecionador" className="absolute" />
                </div>

                <div className="melhores-ofertas-personalizadas">
                    <h5 className="text-primary font-bold text-[14px]">Oferta especial</h5>
                    <h1 className=" my-3 text-5xl font-inter text-dark-gray-2 font-bold">
                        Air Jordan edição de colecionador
                    </h1>
                    <p className="text-light-gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit, ipsum dolor sit amet consectetur.
                    Consectetur doloremque quam aspernatur architecto suscipit. Temporibus fugit laborum,
                    cum fugiat esse nulla eius soluta dolorem, quos unde exercitationem blanditiis magni perspiciatis.
                    </p>
                    <button className="ver-ofertas mt-3 font-inter"><strong>Ver oferta</strong></button>
                </div>
            </div>
        </section>
    )
}

export default OfertaEspecial
