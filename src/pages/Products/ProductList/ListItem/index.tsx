import React, { FC } from 'react'
import { func, shape, string } from 'prop-types'

import * as routes from '../../../../routes'
import { Price } from '../../../../components/Price'
import { Button } from '../../../../components/Button'
import { ProductWrap, Link, Img, ImgWrap, Title } from './styled'

const ProductListItem = (
  { name, id, imgUrl, price, onAddToCart } // eslint-disable-line no-shadow
) => (
  <ProductWrap>
    <Link to={routes.getProductDetailRoute(id)}>
      <ImgWrap>
        <Img alt={name} src={imgUrl} width={200} />
      </ImgWrap>
      <Title>{name}</Title>
      <Price>{price.formatted_amount}</Price>
      <Button onClick={e => onAddToCart(e, id)}>Add to cart</Button>
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

export { ProductListItem }
