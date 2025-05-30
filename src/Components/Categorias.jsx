import blusa from '../assets/blusaCategoria.png'
import bone from '../assets/boneCategoria.png'
import calca from '../assets/calcaCategoria.png'
import tenis from '../assets/sapatoCategoria.png'
import fone from '../assets/foneCategoria.png'

const Categorias = () => {
  return (
    <>
      <div id='Categorias' className=" flex gap-12 justify-center ">
        <div className=" flex  gap-12 justify-center ">
          <div className=" rounded-full bg-[#ffffff]  drop-shadow-lg blur-[000000] justify-items-center  h-[104px] w-[104px]   p-2 object-cover ">
            <img src={blusa} alt="" />
            <h2 className="text-[#474747] font-semibold text-center p-8 text-[14px] ">Camisetas</h2>
          </div>

          <div className=" rounded-full bg-[#ffffff] drop-shadow-lg blur-[000000] justify-items-center p-5 h-[104px] w-[104px] object-cover ">
            <img src={calca} alt="" />
            <h2 className="text-[#474747] font-semibold text-center p-11  text-[14px] ">Calças</h2>
          </div>

          <div className="rounded-full bg-[#ffffff] drop-shadow-lg blur-[000000] h-[104px] w-[104px] p-2 object-cover">
            <img src={bone} alt="" />
            <h2 className="text-[#474747] font-semibold text-center  p-8 text-[14px]  ">Bonés</h2>
          </div>

          <div className="rounded-full bg-[#ffffff] drop-shadow-lg blur-[000000] justify-items-center p-5 h-[104px] w-[104px] object-cover ">
            <img src={fone} alt="" />
            <h2 className="text-[#474747] font-semibold text-center p-10 text-[14px]  ">Haedphones</h2>
          </div>

          <div className="rounded-full bg-[#ffffff] drop-shadow-lg blur-[000000] justify-items-center p-5 h-[104px] w-[104px] object-cover">
            <img src={tenis} alt="" />
            <h2 className="text-[#474747] font-semibold text-center  p-10 text-[14px]  ">Tênis</h2>
          </div>
        </div>
      </div>
    </>
  );
}

      export default Categorias