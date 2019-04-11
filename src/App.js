import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GlobalStyles from './globalStyles'

import store from './store'

import Layout from './components/Layout/index'
import ProductListContainer from './pages/Products'
import { ProductDetail } from './pages/ProductDetail/index'
import Cart from './pages/Cart'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GlobalStyles />
          <Layout>
            <Switch>
              <Route path="/" exact component={ProductListContainer} />
              <Route path="/cart" component={Cart} />
              <Route path="/:productId" component={ProductDetail} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    )
  }
}

export default App
