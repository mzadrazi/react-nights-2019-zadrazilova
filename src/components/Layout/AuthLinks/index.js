import React from 'react'
import { bool, func } from 'prop-types'
import { connect } from 'react-redux'

import { NavLink } from '../styled'

import * as routes from '../../../routes'
import { logoutUser } from '../../../store/userSession/actions'

// TODO: style logout button as a link
const AuthLinks = ({ isAuthenticated, dispatchLogout }) => {
  if (isAuthenticated) {
    return (
      <>
        <NavLink to={routes.MY_ACCOUNT}>My Account</NavLink>
        <button onClick={dispatchLogout}>Log out</button>
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
  dispatchLogout: func.isRequired,
  isAuthenticated: bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.userSession.isAuthenticated,
})

const mapDispatchToProps = {
  dispatchLogout: logoutUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLinks)
