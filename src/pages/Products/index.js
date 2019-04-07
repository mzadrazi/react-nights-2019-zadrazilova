import React from 'react'
import { array, func } from 'prop-types'
import { connect } from 'react-redux'

import ProductList from './components/ProductList/index'

import { getProducts } from '../../api/apiCalls.js'
import { loadProducts } from '../../store/products/actions'
import { addProduct } from '../../store/cartItems/actions'

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
      <ProductList
        isLoading={isLoading}
        onAddToCart={this.handleAddToCart}
        products={products}
      />
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
