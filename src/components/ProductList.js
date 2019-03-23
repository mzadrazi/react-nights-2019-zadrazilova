import React from 'react'
import { array, bool } from 'prop-types'
import ProductListItem from './ProductListItem'

const ProductList = props => {
  const { isLoading, products } = props

  if (isLoading) {
    return 'Loading products ...'
  }

  return (
    <ul>
      {products.map(({ id, attributes }) => (
        <ProductListItem key={id} {...attributes} />
      ))}
    </ul>
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
