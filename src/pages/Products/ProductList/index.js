import React from 'react'
import { array, func } from 'prop-types'

import { ProductListItem } from './ListItem/index'
import { Wrapper } from './styled'

const ProductList = props => {
  const { products, onAddToCart } = props

  return (
    <Wrapper>
      {products.map(({ id, ...product }) => (
        <ProductListItem
          key={id}
          id={id}
          {...product}
          onAddToCart={onAddToCart}
        />
      ))}
    </Wrapper>
  )
}

ProductList.propTypes = {
  onAddToCart: func.isRequired,
  products: array,
}

ProductList.defaultProps = {
  isLoading: false,
  products: [],
}

export { ProductList }
