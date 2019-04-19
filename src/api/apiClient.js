import config from '../config'
import { getToken, setToken, removeToken } from '../utils/token'
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

  // token expiration
  if (rawRes.status === 401 && token) {
    //remove token & retry
    removeToken()
    return api(url, options)
  }

  if (rawRes.status >= 400) {
    // TODO: handle errors properly
    throw Error(res.errors[0].detail)
  }

  return res
}
