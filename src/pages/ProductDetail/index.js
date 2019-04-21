import React from 'react'
import { func, shape, string } from 'prop-types'
import { connect } from 'react-redux'

import { addProduct } from '../../store/cart/actions'

import { useApi } from '../../api/useApi'
import { getProduct } from '../../api/products/getProduct'

import { Loader } from '../../components/Loader'
import { Button } from '../../components/Button'
import {
  Description,
  Img,
  ImgWrap,
  Title,
  Price,
  ProductInfoWrap,
  Wrapper,
} from './styled'

//TODO: add breadcrumb

const ProductDetailView = ({ match, requestAddProduct }) => {
  const { productId } = match.params

  const handleAddProduct = () => requestAddProduct(productId)

  const { data: product, isLoading } = useApi(() => getProduct(productId), [
    productId,
  ])

  return (
    <>
      {isLoading && <Loader />}
      {product && (
        <Wrapper>
          <ImgWrap>
            <Img src={product.imgUrl} />
          </ImgWrap>
          <ProductInfoWrap>
            <Title>{product.name}</Title>
            <Description>{product.description}</Description>
            <Price>{product.price.formatted_amount}</Price>
            <Button onClick={handleAddProduct}>Add To Cart</Button>
          </ProductInfoWrap>
        </Wrapper>
      )}
    </>
  )
}

ProductDetailView.propTypes = {
  match: shape({
    params: shape({
      productId: string.isRequired,
    }).isRequired,
  }).isRequired,
  requestAddProduct: func.isRequired,
}

const mapDispatchToProps = {
  requestAddProduct: addProduct,
}

const ProductDetail = connect(
  null,
  mapDispatchToProps
)(ProductDetailView)

export { ProductDetail }
