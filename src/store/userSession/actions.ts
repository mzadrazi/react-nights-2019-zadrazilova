import { ThunkDispatch } from 'redux-thunk'

import { getCustomerToken } from '../../api/getCustomerToken'
import { getCustomer } from '../../api/customer/getCustomer'
import { setToken, removeToken } from '../../utils/token'
import { createCustomer } from '../../api/customer/createCustomer'

import { CustomerType } from '../../global/types'

// action types
export const LOGIN = 'userSession/LOGIN' as 'userSession/LOGIN'
export const LOGOUT = 'userSession/LOGOUT' as 'userSession/LOGOUT'

export type UserSessionAction = ReturnType<typeof login | typeof logout>

type Dispatch = ThunkDispatch<{}, {}, UserSessionAction>

// action creators
export const login = (userInfo: CustomerType) => ({
  type: LOGIN,
  payload: userInfo,
})

export const logout = () => ({
  type: LOGOUT,
})

export const requestLogin = ({
  email,
  password,
}: {
  email: string
  password: string
}) => async (dispatch: Dispatch) => {
  const { token, clientId } = await getCustomerToken({ email, password })

  setToken(token)
  const customer = await getCustomer(clientId)

  dispatch(login({ clientId, ...customer }))
}

export const logoutUser = () => (dispatch: Dispatch) => {
  removeToken()
  dispatch(logout())
}

export const signUpUser = values => async (dispatch: Dispatch) => {
  await createCustomer(values)
  await dispatch(requestLogin(values))
}
