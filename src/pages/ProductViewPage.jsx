import Buybox from '../Components/Buybox.jsx'
import Section from '../Components/Section'
import ProductListing from '../Components/ProductListing'

const ProductViewPage = () => {
  return (
    <div>
      <h1></h1>
    <Buybox/>
      <Section title='Produtos relacionados' textLeft link>
        <ProductListing quantidade={4} />
      </Section>
    </div>
    
  )
}

export default ProductViewPage
