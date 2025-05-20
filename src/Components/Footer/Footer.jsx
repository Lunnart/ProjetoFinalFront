import logo from "../../assets/logo-FOOTER.JPG.png"
import twitter from "../../assets/Path 22667 X .JPG.png"
import instagram from "../../assets/Group 2555 (1)INSTAGRAM.JPG.png"
import facebook from "../../assets/Path 22671 FACEBOOK.JPG.png"
import linha from "../../assets/Rectangle 3747LINHA.PJS.png"

const Footer = () => {
  return (
    <footer className="p-15 flex  bg-[#1f1f1f] w-full">
      <div className="">
        <img src={logo} alt="" />

        <div className="flex text-justify ">
          <p className=" text-white">Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore. </p>
        </div>
        <div classNames="flex " >
          <a className="m-5 cursor-pointer"><img src={twitter} alt="twitter" /> </a>
          <a className="m-5 cursor-pointer "><img src={instagram} alt="instagram" /> </a>
          <a className="m-5 cursor-pointer"><img src={facebook} alt="facebook" /> </a>
        </div>

      </div>
      <nav>
        <h2 className=" p-2 font-semibold text-white">Informação</h2>
        <ul className=" text-white flex-23 text-justify  ">
          <li><a className="p-2 text-white" href="">Sobre Drip Store</a></li>
          <li><a className="p-2 text-white" href="">Segurança</a></li>
          <li><a className="p-2 text-white" href="">Wishlist</a></li>
          <li><a className="p-2 text-white" href="">Blog</a></li>
          <li><a className="p-2 text-white" href="">Trabalhe Conosco</a></li>
          <li><a className="p-2 text-white" href="">Meus Pedidos</a></li>
        </ul>

        <h2 className="p-2 font-semibold text-white ">Categorias</h2>
        <ul className=" text-white flex-23">
          <li><a className="p-2 text-white" href="">Camisetas</a></li>
          <li><a className="p-2 text-white" href="">Calças</a></li>
          <li><a className="p-2 text-white" href="">Bonés</a></li>
          <li><a className="p-2 text-white" href="">Headphones</a></li>
          <li><a className="p-2 text-white" href="">Ténis</a></li>
        </ul>
      </nav>

      <div>
        <h2 className="p-2 font-semibold text-white ">Contatos</h2>
        <p className="p-2 text-white"> Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        <p className="p-2 text-white">(85) 3051-3411 </p>
      </div>

      <div className=" text-white justify-items-center p-2" >
        <img src={linha} alt=" linha" />
        <p className=" text-white"> @2025 Digital College </p>
      </div>
    </footer>
  )
}

export default Footer



