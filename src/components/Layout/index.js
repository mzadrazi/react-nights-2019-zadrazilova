import React from 'react'
import { node } from 'prop-types'

import { CartQttyInfo } from '../CartQttyInfo'
import { Header, MainTitle, Main, Link } from './styled'

const Layout = props => (
  <>
    <Header>
      <MainTitle>
        <Link to="/">The Cyan Brand</Link>
      </MainTitle>
      <Link to="/">All products</Link>
      <Link to="/cart">
        Cart <CartQttyInfo />
      </Link>
    </Header>
    <Main>{props.children}</Main>
  </>
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
