import React from 'react'
import { object } from 'prop-types'

import { getProduct } from '../../api/apiCalls'

import Loader from '../../components/Loader'
import {
  Button,
  Description,
  Img,
  ImgWrap,
  Title,
  Price,
  ProductInfoWrap,
  Wrapper,
} from './styled'

class ProductDetail extends React.Component {
  state = {
    isLoading: true,
    product: null,
  }

  async componentDidMount() {
    const id = this.props.match.params.productId
    const product = await getProduct(id)

    this.setState({ product, isLoading: false })
  }

  render() {
    const { product, isLoading } = this.state

    if (isLoading) return <Loader />

    return (
      <Wrapper>
        <ImgWrap>
          <Img src={product.imgUrl} />
        </ImgWrap>
        <ProductInfoWrap>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
          <Price>{product.price.formatted_amount}</Price>
          <Button>Add To Cart</Button>
        </ProductInfoWrap>
      </Wrapper>
    )
  }
}

ProductDetail.propTypes = {
  match: object.isRequired,
}

export { ProductDetail }
