import React from 'react'

import { getProducts } from '../../api/apiCalls.js'
import ProductList from './components/ProductList/index'

class ProductListContainer extends React.Component {
  state = {
    isLoading: true,
    products: [],
  }

  // TODO: handling errors
  async componentDidMount() {
    const products = await getProducts()

    this.setState({ products, isLoading: false })
  }

  render() {
    const { isLoading, products } = this.state

    return <ProductList isLoading={isLoading} products={products} />
  }
}

export default ProductListContainer
