import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GlobalStyles from './globalStyles'

import store from './store'

import Layout from './components/Layout'
import { PrivateRoute } from './components/PrivateRoute'
import ProductListContainer from './pages/Products'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { MyProfile } from './pages/MyProfile'

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
              <Route path="/sign-up" component={SignUp} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/my-profile" component={MyProfile} />
              <Route path="/:productId" component={ProductDetail} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    )
  }
}

export default App
