import React, { Component } from 'react'
import { getToken, getProducts } from './apiCalls'
import ProductList from './components/ProductList'

class App extends Component {
  state = {
    isLoading: true,
    products: [],
  }

  // TODO: handling errors
  async componentDidMount() {
    const token = await getToken()
    const products = await getProducts(token)

    this.setState({ products, isLoading: false })
  }

  render() {
    const { isLoading, products } = this.state

    return (
      <div className="App">
        <h1>E-commerce app</h1>
        <ProductList isLoading={isLoading} products={products} />
      </div>
    )
  }
}

export default App
