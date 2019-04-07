import React from 'react'
import { func, shape, string } from 'prop-types'

import { Price } from '../../../../components/Price'
import { AddToCartButton } from '../../../../components/AddToCartButton'
import { ProductWrap, Link, Img, ImgWrap, Title } from './styled'

const ProductListItem = (
  { name, id, imgUrl, price, onAddToCart } // eslint-disable-line no-shadow
) => (
  <ProductWrap>
    <Link to={`/${id}`}>
      <ImgWrap>
        <Img alt={name} src={imgUrl} width={200} />
      </ImgWrap>
      <Title>{name}</Title>
      <Price>{price.formatted_amount}</Price>
      <AddToCartButton onClick={e => onAddToCart(e, id)}>
        Add to cart
      </AddToCartButton>
    </Link>
  </ProductWrap>
)

ProductListItem.propTypes = {
  id: string.isRequired,
  imgUrl: string.isRequired,
  name: string.isRequired,
  onAddToCart: func.isRequired,
  price: shape({
    formatted_amount: string,
  }).isRequired,
}

export default ProductListItem
