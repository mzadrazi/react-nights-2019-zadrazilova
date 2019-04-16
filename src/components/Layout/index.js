import React from 'react'
import { node } from 'prop-types'

import { CartQttyInfo } from '../CartQttyInfo'
import { Header, MainTitle, Main, Link, Nav, NavLink } from './styled'
import AuthLinks from './AuthLinks'

const Layout = props => (
  <>
    <Header>
      <MainTitle>
        <Link to="/">The Cyan Brand</Link>
      </MainTitle>
      <Nav>
        <NavLink to="/">All products</NavLink>
        <NavLink to="/cart">
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

export default Layout
