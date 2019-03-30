import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import ProductListContainer from './pages/Products'
import { ProductDetail } from './pages/ProductDetail/index'

class App extends Component {
  render() {
    return (
      <Router>
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
