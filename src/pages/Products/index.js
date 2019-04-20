import React from 'react'
import { array, func } from 'prop-types'
import { connect } from 'react-redux'

import ProductList from './ProductList/index'
import { Pagination } from '../../components/Pagination'

import { getProducts } from '../../api/products/getProducts.js'
import { loadProducts } from '../../store/products/actions'
import { addProduct } from '../../store/cart/actions'

class Products extends React.Component {
  state = {
    isLoading: true,
  }

  // TODO: handling errors
  async componentDidMount() {
    const products = await getProducts()
    this.props.loadProducts(products)

    this.setState({ isLoading: false })
  }

  handleAddToCart = (e, productId) => {
    e.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    const { isLoading } = this.state
    const { products } = this.props

    return (
      <>
        <Pagination nrPages={3} />
        <ProductList
          isLoading={isLoading}
          onAddToCart={this.handleAddToCart}
          products={products}
        />
      </>
    )
  }
}

Products.propTypes = {
  addProduct: func.isRequired,
  loadProducts: func.isRequired,
  products: array,
}

Products.defaultProps = {
  products: [],
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = {
  addProduct,
  loadProducts,
}

const ProductListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default ProductListContainer
