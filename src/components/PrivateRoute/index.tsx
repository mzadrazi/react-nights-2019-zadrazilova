import React, { FC } from 'react'
import { bool, func, object } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { LOGIN } from '../../routes'
import { AppState } from '../../store'

type Props = {} | ReturnType<typeof mapStateToProps>

const PrivateRouteView: FC<Props> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: LOGIN,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

PrivateRouteView.propTypes = {
  component: func.isRequired,
  isAuthenticated: bool.isRequired,
  location: object.isRequired,
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.userSession.isAuthenticated,
})

const PrivateRoute = connect(mapStateToProps)(PrivateRouteView)

export { PrivateRoute }
