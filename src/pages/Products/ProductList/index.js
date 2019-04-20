import React from 'react'
import { array, bool, func } from 'prop-types'

import { ProductListItem } from './ListItem/index'
import { Loader } from '.././../../components/Loader/index'
import { Wrapper } from './styled'

const ProductList = props => {
  const { isLoading, products, onAddToCart } = props

  if (isLoading) {
    return <Loader />
  }

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
  isLoading: bool,
  onAddToCart: func.isRequired,
  products: array,
}

ProductList.defaultProps = {
  isLoading: false,
  products: [],
}

export { ProductList }
