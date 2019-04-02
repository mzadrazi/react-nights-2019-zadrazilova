import React from 'react'
import { node } from 'prop-types'

import { Header, MainTitle, Main, Link } from './styled'

const Layout = props => (
  <>
    <Header>
      <MainTitle>
        <Link to="/">The Cyan Brand</Link>
      </MainTitle>
    </Header>
    <Main>{props.children}</Main>
  </>
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
