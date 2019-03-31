import React from 'react'
import { array, bool } from 'prop-types'

import ProductListItem from '../ProductListItem'
import { Wrapper } from './styled'

const ProductList = props => {
  const { isLoading, products } = props

  if (isLoading) {
    return 'Loading products ...'
  }

  return (
    <Wrapper>
      {products.map(({ id, ...product }) => (
        <ProductListItem key={id} id={id} {...product} />
      ))}
    </Wrapper>
  )
}

ProductList.propTypes = {
  isLoading: bool,
  products: array,
}

ProductList.defaultProps = {
  isLoading: false,
  products: [],
}

export default ProductList
