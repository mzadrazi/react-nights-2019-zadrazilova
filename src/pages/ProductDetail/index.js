import React from 'react'
import { object } from 'prop-types'

import { getProduct } from '../../api/apiCalls'

import {
  Wrapper,
  ImgWrap,
  Img,
  Title,
  Description,
  Price,
  ProductInfoWrap,
} from './styled'

class ProductDetail extends React.Component {
  state = {
    product: null,
  }

  async componentDidMount() {
    const id = this.props.match.params.productId
    const product = await getProduct(id)

    this.setState({ product })
  }

  render() {
    const { product } = this.state

    if (!product) return null

    return (
      <Wrapper>
        <ImgWrap>
          <Img src={product.imgUrl} />
        </ImgWrap>
        <ProductInfoWrap>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
          <Price>{product.price.formatted_amount}</Price>
        </ProductInfoWrap>
      </Wrapper>
    )
  }
}

ProductDetail.propTypes = {
  match: object.isRequired,
}

export { ProductDetail }