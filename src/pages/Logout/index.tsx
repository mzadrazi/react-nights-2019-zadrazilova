import { useEffect, FC } from 'react'
import { func, shape } from 'prop-types'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import * as routes from '../../routes'
import { logoutUser } from '../../store/userSession/actions'

type Props = {
  history: {
    push: (url: string) => void
  }
} & typeof mapDispatchToProps

const LogoutPage: FC<Props> = props => {
  useEffect(() => {
    props.dispatchLogout()
    toast.success('You have been successfully signed out.')
    props.history.push(routes.HOMEPAGE)
  })

  return null
}

const mapDispatchToProps = {
  dispatchLogout: logoutUser,
}

export const Logout = connect(
  null,
  mapDispatchToProps
)(LogoutPage)
