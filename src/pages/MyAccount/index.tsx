import React, { FC } from 'react'
import { shape, string, number } from 'prop-types'
import { connect } from 'react-redux'

import { H1 } from '../../components/Headings'
import { AppState } from '../../store'
import { CustomerType } from '../../global/types'

type Props = ReturnType<typeof mapStateToProps>

//TODO: styling, show orders, ...
const MyAccountView: FC<Props> = ({ userInfo }) => (
  <>
    <H1 textAlign="center">My Account</H1>
    <ul>
      {Object.keys(userInfo).map((key: string) => (
        <li key={key}>
          <strong>{key}: </strong> {userInfo[key]}
        </li>
      ))}
    </ul>
  </>
)

const mapStateToProps = (state: AppState) => ({
  userInfo: state.userSession.customer,
})

const MyAccount = connect(mapStateToProps)(MyAccountView)

export { MyAccount }
