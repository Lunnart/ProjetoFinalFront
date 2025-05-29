import React from 'react'
import Section from '../Components/Section'
import ProductListing from '../Components/ProductListing'

const ProductViewPage = () => {
  return (
    <div>
      <Section title='Produtos relacionados' textLeft link>
        <ProductListing quantidade={4} />
      </Section>
    </div>
  )
}

export default ProductViewPage
