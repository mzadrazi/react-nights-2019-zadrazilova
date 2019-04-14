import config from '../config'
import { getToken } from './apiCalls'
import store from '../store'
import { login as loginAction } from '../store/userSession/actions'

//todo: handle errors - try catch
export const getCustomerToken = async ({ email, password }) => {
  //todo getToken from local storage
  const token = await getToken()

  const reqBody = {
    grant_type: 'password',
    username: `${email}`,
    password: `${password}`,
    client_id: `${config.clientId}`,
    scope: `${config.scope}`,
  }

  const rawRes = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(reqBody),
  })

  const res = await rawRes.json()

  return {
    token: res.access_token,
    clientId: res.owner_id,
    //TODO: refresh token
  }
}

export const login = async ({ email, password }) => {
  const { token, clientId } = await getCustomerToken({ email, password })
  console.log('token', token)
  console.log('clientId', clientId)

  //setToken(token)
  store.dispatch(loginAction({ clientId }))
}

/**
 * Login:
 * 1. get token
 * 2. store it (in local storage)
 * 3. get info about user and store it in store
 */
