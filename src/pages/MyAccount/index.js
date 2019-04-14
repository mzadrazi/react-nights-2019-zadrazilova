import React from 'react'
import { shape, string, number } from 'prop-types'
import { connect } from 'react-redux'

import { H1 } from '../../components/Headings'

//TODO: styling, show orders, ...
class MyAccountView extends React.Component {
  render() {
    const { userInfo } = this.props

    return (
      <>
        <H1 textAlign="center">My Account</H1>
        <ul>
          {Object.keys(userInfo).map(key => (
            <li key={key}>
              <strong>{key}: </strong> {userInfo[key]}
            </li>
          ))}
        </ul>
      </>
    )
  }
}

MyAccountView.propTypes = {
  userInfo: shape({
    clientId: number.isRequired,
    email: string.isRequired,
    firstName: string,
    status: string,
  }).isRequired,
}

const mapStateToProps = state => ({
  userInfo: state.userSession,
})

const MyAccount = connect(mapStateToProps)(MyAccountView)

export { MyAccount }
