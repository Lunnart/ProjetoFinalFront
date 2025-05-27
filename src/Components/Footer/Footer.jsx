import logo from "../../assets/logo-FOOTER.JPG.png"
import twitter from "../../assets/Path 22667 X .JPG.png"
import instagram from "../../assets/Group 2555 (1)INSTAGRAM.JPG.png"
import facebook from "../../assets/Path 22671 FACEBOOK.JPG.png"
import linha from "../../assets/Rectangle 3747LINHA.PJS.png"


export function Footer() {
  return (
    <footer className="bg-[#1f1f1f] w-full mb-10 px-[100px] pt-[72px]">
      <div className="flex">
      <div className=" w-[400px] mr-[150px]">
        <img src={logo} alt="logo" />

        <div className="">
          <p className=" text-white py-10 w-[60%]">Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore. </p>
        </div>
        <div className="flex p-5 gap-8" >
          <a className="  cursor-pointer"><img src={facebook} alt="facebook" /> </a>
          <a className="  cursor-pointer "><img src={instagram} alt="instagram" /> </a>
          <a className="  cursor-pointer"><img src={twitter} alt="twittet" /> </a>
        </div>

      </div>
      <nav className="flex gap-10  ">
        <div className="">
          <h2 className=" font-semibold  text-white">Informação</h2>
          <ul className=" text-white pt-5 leading-[38px]">
            <li><a className=" text-white" href="">Sobre Drip Store</a></li>
            <li><a className="   text-white" href="">Segurança</a></li>
            <li><a className="  text-white" href="">Wishlist</a></li>
            <li><a className="   text-white" href="">Blog</a></li>
            <li><a className="  text-white" href="">Trabalhe Conosco</a></li>
            <li><a className="   text-white" href="">Meus Pedidos</a></li>
          </ul>
        </div>
        <div className="px-10">
          <h2 className=" font-semibold  text-white ">Categorias</h2>
          <ul className=" text-white pt-5 leading-[38px]">
            <li><a className=" text-white" href="">Camisetas</a></li>
            <li><a className= " text-white" href="">Calças</a></li>
            <li><a className="  text-white" href="">Bonés</a></li>
            <li><a className="  text-white" href="">Headphones</a></li>
            <li><a className="  text-white" href="">Ténis</a></li>
          </ul>
        </div>
   
      <div className="px-10 w-[300px] ml-[100px]">
        <h2 className="   font-semibold text-white  ">Contatos</h2>
        <p className=" pt-5 text-white"> Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        <p className=" pt-5 text-white">(85) 3051-3411 </p>
      </div>
       </nav>
       </div>


      <div className=" text-white  place-items-center pt-6 " >
        <div className="h-[1px] bg-white/30 w-[100%]"></div>
        <p className=" text-white p-5 "> @2025 Digital College </p>
      </div>
      
    </footer>
  );
}

export default Footer



