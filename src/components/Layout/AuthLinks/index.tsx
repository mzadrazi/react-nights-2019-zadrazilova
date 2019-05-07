import React, { FC } from 'react'
import { bool } from 'prop-types'
import { connect } from 'react-redux'

import { NavLink } from '../styled'
import { AppState } from '../../../store'

import * as routes from '../../../routes'

type Props = ReturnType<typeof mapStateToProps>

const AuthLinks: FC<Props> = ({ isAuthenticated }) => {
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

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.userSession.isAuthenticated,
})

export default connect(mapStateToProps)(AuthLinks)
