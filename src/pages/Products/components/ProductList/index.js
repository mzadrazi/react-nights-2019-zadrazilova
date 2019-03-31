import React from 'react'
import { array, bool } from 'prop-types'

import ProductListItem from './ListItem/index'
import Loader from '../.././../../components/Loader/index'
import { Wrapper } from './styled'

const ProductList = props => {
  const { isLoading, products } = props

  if (isLoading) {
    return <Loader />
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
