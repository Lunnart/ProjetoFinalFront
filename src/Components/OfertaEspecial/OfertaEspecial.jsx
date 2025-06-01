import tenis from "../../assets/tenisOferta.png";
import elipse from "../../assets/elipse.png";

const OfertaEspecial = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-10">
      <div className="flex flex-wrap gap-14 items-center justify-between">
        {/* Imagem com fundo circular */}
        <div className="relative w-[$350px]
         h-[350px] flex items-center justify-center rounded-full bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${elipse})` }}>
          <img src={tenis} alt="Air Jordan edição de colecionador" className="w-[80%] object-contain" />
        </div>

        {/* Descrição da Oferta */}
        <div className="flex-1 max-w-[500px]">
          <h5 className="text-[#C92071] font-bold text-sm">Oferta especial</h5>
          <h1 className="my-3 text-5xl font-bold text-neutral-800">
            Air Jordan edição de colecionador
          </h1>
          <p className="text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque quam aspernatur architecto
            suscipit. Temporibus fugit laborum, cum fugiat esse nulla eius soluta dolorem, quos unde exercitationem
            blanditiis magni perspiciatis.
          </p>
          <button className="mt-5 bg-[#C92071] text-white font-bold py-3 px-8 rounded-md hover:bg-[#991956] transition">
            Ver oferta
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfertaEspecial;
