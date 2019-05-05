import React, { FC } from 'react'
import { array, func } from 'prop-types'

import { ProductListItem } from './ListItem/index'
import { Wrapper } from './styled'

type Props = {
  onAddToCart: () => void
}

const ProductList: FC<Props> = ({ products, onAddToCart }) => (
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

ProductList.propTypes = {
  onAddToCart: func.isRequired,
  products: array,
}

ProductList.defaultProps = {
  products: [],
}

export { ProductList }
