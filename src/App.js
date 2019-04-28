import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { GlobalStyles } from './globalStyles'

import store from './store'
import * as routes from './routes'

import { ErrorBoundary } from './components/ErrorBoundary'
import { Layout } from './components/Layout'
import { PrivateRoute } from './components/PrivateRoute'
import { Products } from './pages/Products'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { MyAccount } from './pages/MyAccount'
import { NotFound } from './pages/NotFound'

const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalStyles />
      <ToastContainer />
      <ErrorBoundary>
        <Layout>
          <Switch>
            <Route
              path={routes.HOMEPAGE}
              exact
              render={() => <Redirect to={routes.PRODUCT_LIST} />}
            />
            <Route path={routes.PRODUCT_LIST} exact component={Products} />
            <Route path={routes.PRODUCT_DETAIL} component={ProductDetail} />
            <Route path={routes.CART} component={Cart} />
            <Route path={routes.SIGN_UP} component={SignUp} />
            <Route path={routes.LOGIN} component={Login} />
            <Route path={routes.LOGOUT} component={Logout} />
            <PrivateRoute path={routes.MY_ACCOUNT} component={MyAccount} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ErrorBoundary>
    </Router>
  </Provider>
)

export { App }
