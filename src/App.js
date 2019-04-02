import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GlobalStyles from './globalStyles'

import Layout from './components/Layout/index'
import ProductListContainer from './pages/Products'
import { ProductDetail } from './pages/ProductDetail/index'

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <Layout>
          <Switch>
            <Route path="/" exact component={ProductListContainer} />
            <Route path="/:productId" component={ProductDetail} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App
