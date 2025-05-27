import OfertaEspecial from '../components/OfertaEspecial/OfertaEspecial'
import CardColecao from '../Components/CardColecao'
import Carrosel from '../Components/Carrosel'

const Home = () => {
  return (
    <>
     <Carrosel/>
     <CardColecao/>
     <div>Categoria</div>
     <div>Produto Listing</div>
     <OfertaEspecial/>
    </>
  )
}


export default Home