import React from 'react'
import { bool, func } from 'prop-types'
import { connect } from 'react-redux'

import { NavLink } from '../styled'

import { logout } from '../../../store/userSession/actions'

// TODO: style logout button as a link
const AuthLinks = ({ isAuthenticated, dispatchLogout }) => {
  if (isAuthenticated) {
    return (
      <>
        <NavLink to="/my-account">My Account</NavLink>
        <button onClick={dispatchLogout}>Log out</button>
      </>
    )
  }

  return (
    <>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/login">Log in</NavLink>
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
  dispatchLogout: logout,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLinks)
