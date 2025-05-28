import React from 'react'
import ProductListing from '../Components/ProductListing'
import Section from '../Components/Section'

const ProductListingPage = () => {
  return (
    <div>
      {/* <Ordernacao/>
      <Aside/> */}
      <Section title='' textLeft>
        <ProductListing quantidade={15} />
      </Section>
    </div>
  )
}

export default ProductListingPage
