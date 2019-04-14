import React from 'react'
import { bool, element, object } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRouteView = ({
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
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

PrivateRouteView.propTypes = {
  component: element.isRequired,
  isAuthenticated: bool.isRequired,
  location: object.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.userSession.clientId !== undefined,
})

const PrivateRoute = connect(mapStateToProps)(PrivateRouteView)

export { PrivateRoute }
