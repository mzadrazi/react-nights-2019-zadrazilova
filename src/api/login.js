import { getCustomerToken } from './getCustomerToken'
import store from '../store'
import { login as loginAction } from '../store/userSession/actions'
import { setToken } from '../utils/token'
import { getCustomer } from './customer/getCustomer'

/**
 * Login:
 * 1. get token
 * 2. store it (in local storage)
 * 3. get info about user and store it in store
 */

//TODO: where to place this function
export const login = async ({ email, password }) => {
  const { token, clientId } = await getCustomerToken({ email, password })

  setToken(token)
  const customer = await getCustomer(clientId)

  store.dispatch(loginAction({ clientId, ...customer }))
}
