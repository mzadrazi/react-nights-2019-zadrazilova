import React from 'react'
import { arrayOf, bool } from 'prop-types'
import ProductListItem from './ProductListItem'

const ProductList = props => {
  const { isLoading, products } = props

  if (isLoading) {
    return 'Loading products ...'
  }

  return (
    <ul>
      {products.map(({ id, attributes }) => (
        <li key={id}>
          <ProductListItem {...attributes} />
        </li>
      ))}
    </ul>
  )
}

ProductList.propTypes = {
  isLoading: bool,
  products: arrayOf(ProductListItem.propTypes),
}

ProductList.defaultProps = {
  isLoading: false,
  products: [],
}

export default ProductList
