import React from 'react'
import { func, shape, string } from 'prop-types'
import { connect } from 'react-redux'

import { addProduct } from '../../store/cartItems/actions'

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

//TODO: add breadcrumb

class ProductDetailView extends React.Component {
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
          <Button onClick={() => this.props.addProduct(product.id)}>
            Add To Cart
          </Button>
        </ProductInfoWrap>
      </Wrapper>
    )
  }
}

ProductDetailView.propTypes = {
  addProduct: func.isRequired,
  match: shape({
    params: shape({
      productId: string.isRequired,
    }).isRequired,
  }).isRequired,
}

const mapDispatchToProps = {
  addProduct,
}

const ProductDetail = connect(
  null,
  mapDispatchToProps
)(ProductDetailView)

export { ProductDetail }
