import React from 'react'
import { bool } from 'prop-types'
import { connect } from 'react-redux'

import { NavLink } from '../styled'

import * as routes from '../../../routes'

const AuthLinks = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <>
        <NavLink to={routes.MY_ACCOUNT}>My Account</NavLink>
        <NavLink to={routes.LOGOUT}>Log out</NavLink>
      </>
    )
  }

  return (
    <>
      <NavLink to={routes.SIGN_UP}>Sign Up</NavLink>
      <NavLink to={routes.LOGIN}>Log in</NavLink>
    </>
  )
}

AuthLinks.propTypes = {
  isAuthenticated: bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.userSession.isAuthenticated,
})

export default connect(mapStateToProps)(AuthLinks)
