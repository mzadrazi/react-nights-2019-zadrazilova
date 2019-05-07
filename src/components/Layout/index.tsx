import React, { FC } from 'react'
import { node } from 'prop-types'

import { CartQttyInfo } from '../CartQttyInfo'
import { Header, MainTitle, Main, Link, Nav, NavLink } from './styled'
import AuthLinks from './AuthLinks'

import * as routes from '../../routes'

const Layout: FC = props => (
  <>
    <Header>
      <MainTitle>
        <Link to={routes.HOMEPAGE}>The Cyan Brand</Link>
      </MainTitle>
      <Nav>
        <NavLink to={routes.PRODUCT_LIST}>All products</NavLink>
        <NavLink to={routes.CART}>
          Cart <CartQttyInfo />
        </NavLink>
        <AuthLinks />
      </Nav>
    </Header>
    <Main>{props.children}</Main>
  </>
)

Layout.propTypes = {
  children: node.isRequired,
}

export { Layout }
