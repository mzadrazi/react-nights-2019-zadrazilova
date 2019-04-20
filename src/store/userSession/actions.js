import { getCustomerToken } from '../../api/getCustomerToken'
import { getCustomer } from '../../api/customer/getCustomer'
import { setToken, removeToken } from '../../utils/token'

// action types
export const LOGIN = 'userSession/LOGIN'
export const LOGOUT = 'userSession/LOGOUT'

// action creators
export const login = userInfo => ({
  type: LOGIN,
  payload: userInfo,
})

// TODO: remove token from storage during logout - where should it be implemented?
export const logout = () => ({
  type: LOGOUT,
})

export const requestLogin = ({ email, password }) => async dispatch => {
  const { token, clientId } = await getCustomerToken({ email, password })

  setToken(token)
  const customer = await getCustomer(clientId)

  dispatch(login({ clientId, ...customer }))
}

export const logoutUser = () => dispatch => {
  removeToken()
  dispatch(logout())
}
