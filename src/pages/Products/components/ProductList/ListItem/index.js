import React from 'react'
import { shape, string } from 'prop-types'

import { Price } from '../../../../../components/Price/index'
import { ProductWrap, Link, Img, ImgWrap, Title } from './styled'

const ProductListItem = (
  { name, id, imgUrl, price } // eslint-disable-line no-shadow
) => (
  <ProductWrap>
    <Link to={`/${id}`}>
      <ImgWrap>
        <Img alt={name} src={imgUrl} width={200} />
      </ImgWrap>
      <Title>{name}</Title>
      <Price textAlign="right">{price.formatted_amount}</Price>
    </Link>
  </ProductWrap>
)

ProductListItem.propTypes = {
  id: string.isRequired,
  imgUrl: string.isRequired,
  name: string.isRequired,
  price: shape({
    formatted_amount: string,
  }).isRequired,
}

export default ProductListItem
