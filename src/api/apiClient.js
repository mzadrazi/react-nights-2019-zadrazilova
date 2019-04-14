import config from '../config'
import { getToken, setToken } from '../utils/token'
import { getGuestToken } from './getGuestToken'

export const api = async (url, options) => {
  // get token from local storage
  let token = getToken()

  if (!token) {
    token = await getGuestToken()
    setToken(token)
  }

  const rawRes = await fetch(`${config.apiUrl}${url}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/vnd.api+json',
    },
    ...options,
  })

  const res = await rawRes.json()

  if (rawRes.status >= 400) {
    // TODO: handle errors properly
    throw Error(res.errors[0].detail)
  }

  //TODO: token expiration & refreshing

  return res
}
