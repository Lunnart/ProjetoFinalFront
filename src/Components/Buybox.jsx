import estrelas from '../assets/estrelas.png'
import avaliacoes from '../assets/avaliacoes.png'
import tenis from '../assets/tenis-carrossel.png'

const Buybox = () => {
    return (
        <>
            <div className='bg-gray-50 pb-10 pt-5 pl-5 '>
                <p className=" font-semibold  text-[#474747] "> Home | Produtos | Tênis | Nike | Tênis Nike Revolution 6 Next
                    Masculino </p>
            </div>
            <div className='flex gap-[40px] bg-gray-50 px-[100px]'>

                <div className='w-[50%]'>

                    <div className=" bg-[#E2E3FF] duration-700 p-20 ease-in-out ">
                        <img src={tenis} className="object-cover" alt="Slide 2" />
                    </div>
                    <div className=' flex gap-2 w-full'>
                        <div className='bg-[#E2E3FF] drop-shadow-xl cursor-pointer rounded-sm w-[117.81px] my-2'  >
                            <button><img src={tenis} alt="" className='cursor-pointer p-3 ' /></button>
                        </div>

                        <div className='bg-[#FFE8BC] drop-shadow-xl cursor-pointer  rounded-sm w-[117.81px] my-2'  >

                            <button><img src={tenis} alt="" className='cursor-pointer p-3 ' /></button>
                        </div>

                        <div className='bg-[#FFC0BC] drop-shadow-xl cursor-pointer rounded-sm w-[117.81px] my-2'  >
                            <button><img src={tenis} alt="" className='cursor-pointer p-3 ' /></button>
                        </div>

                        <div className='bg-[#DEC699] drop-shadow-xl cursor-pointer  rounded-sm w-[117.81px] my-2'  >
                            <button><img src={tenis} alt="" className='cursor-pointer p-3 ' /></button>
                        </div>

                        <div className='bg-[#E8DFCF] drop-shadow-xl cursor-pointer rounded-sm w-[117.81px] my-2'  >
                            <button><img src={tenis} alt="" className='cursor-pointer p-3 ' /></button>
                        </div>

                    </div>

                </div>



                <div className='w-[50%]'>
                    <h1 className="font-bold text-[#1f1f1f]  text-[32px] pl-2 pr-60"> Tênis Nike Revolution   6 Next Nature Masculino
                    </h1>
                    <h2 className="text-[#666666] text-[12px] font-semibold pl-2"> Casual | Nike | REF:38416711 </h2>
                    <div className=" flex  gap-4 pt-5 pl-2  ">
                        <img className="object-contain" src={estrelas} alt="" />
                        <div className="flex gap-2 ">
                            <img className="object-contain" src={avaliacoes} alt="" />
                            <p className=" text-[#8f8f8f] text-[14px] font-semibold">(90 avaliações)</p>
                        </div>
                    </div>
                    <div className=" flex gap-2 p-4">
                        <p className=" text-[32px] font-bold text-[#474747]"> <span className=" text-[15px]">R$</span>219,<span
                            className=" text-[15px]">00</span> </p>
                        <p className=" text-[15px] pt-5 text-[#cccccc] line-through ">250,00</p>
                    </div>
                    <h3 className="text-[#8f8f8f] font-semibold text-[15px] pl-2"> Descrição Do Produto </h3>
                    <p className=" text-[#474747] font-semibold pl-2 pr-[80px] pb-[20px] "> Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio
                        deleniti, fugit enim sit cum ea accusamus
                        molestias voluptas qui reprehenderit, delectus doloremque dolorum ab dolore sint? Voluptatum corrupti minus
                        quas.</p>

                    <h4 className=" font-semibold text-[#8f8f8f] pt-5 pl-2"> Tamanho </h4>

                    <div className=" flex gap-2 font-semibold m-5 pt-2 pl-2">
                        <button
                            className="border-[1px] border-[#cccccc] text-[#474747] rounded-sm bg-white cursor-pointer p-3">36</button>
                        <button
                            className="border-[1px] border-[#cccccc] text-[#474747] rounded-sm bg-white cursor-pointer p-3">39</button>
                        <button
                            className="border-[1px] border-[#cccccc] text-[#474747] rounded-sm bg-white cursor-pointer  p-3">40</button>
                        <button
                            className="border-[1px] border-[#cccccc] text-[#474747] rounded-sm bg-white cursor-pointer p-3">42</button>
                    </div>
                    <h5 className="text-[#8f8f8f] font-semibold pt-5 pl-2"> Cores </h5>

                    <div className=" flex gap-4 p-4 m-5 pl-2">
                        <button className="rounded-full outline-2 outline-white cursor-pointer p-4 bg-[#6FEEFF]"></button>
                        <button className="rounded-full outline-2 outline-white cursor-pointer p-4 bg-[#C92071]"></button>
                        <button className="rounded-full outline-2 outline-white cursor-pointer p-4 bg-[#5E5E5E]"></button>
                        <button className="rounded-full outline-2 outline-white cursor-pointer p-4 bg-[#6D70B7]"></button>
                    </div>
                    <div className="bg-[#FFB31F] rounded-md w-[240px] text-center cursor-pointer p-3 mt-5">
                        <button className=" text-[#ffffff] font-semibold cursor-pointer  ">COMPRAR</button>
                    </div>
                </div>

            </div>

        </>

    );
}

export default Buybox