import { useEffect } from 'react'
import { func, shape } from 'prop-types'
import { connect } from 'react-redux'

import * as routes from '../../routes'
import { logoutUser } from '../../store/userSession/actions'

const LogoutPage = props => {
  useEffect(() => {
    props.logoutAction()
    props.history.push(routes.HOMEPAGE)
  })

  return null
}

LogoutPage.propTypes = {
  history: shape({
    push: func.isRequired,
  }),
  logoutAction: func.isRequired,
}

const mapDispatchToProps = {
  logoutAction: logoutUser,
}

export const Logout = connect(
  null,
  mapDispatchToProps
)(LogoutPage)
