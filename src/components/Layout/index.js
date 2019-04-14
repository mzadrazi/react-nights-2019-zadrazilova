import React from 'react'
import { bool, func, node } from 'prop-types'
import { connect } from 'react-redux'

import { logout } from '../../store/userSession/actions'
import { CartQttyInfo } from '../CartQttyInfo'
import { Header, MainTitle, Main, Link, Nav, NavLink } from './styled'

const LayoutView = props => (
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
        {props.isAuthenticated ? (
          <>
            <NavLink to="/my-profile">My Profile</NavLink>
            <button onClick={props.logout}>Log out</button>
          </>
        ) : (
          <>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/login">Log in</NavLink>
          </>
        )}
      </Nav>
    </Header>
    <Main>{props.children}</Main>
  </>
)

LayoutView.propTypes = {
  children: node.isRequired,
  isAuthenticated: bool.isRequired,
  logout: func.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.userSession.clientId !== undefined,
})

const mapDispatchToProps = {
  logout,
}

const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutView)

export default Layout
