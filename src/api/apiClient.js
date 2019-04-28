import { config } from '../config'
import { getToken, setToken } from '../utils/token'
import { getGuestToken } from './getGuestToken'
import { AsyncValidationError } from '../utils/errors'

const handleApiErrors = (statusCode, errors) => {
  if (statusCode >= 400 && statusCode < 500) {
    throw new AsyncValidationError(errors[0].detail)
  }

  throw new Error(`API server error`)
}

const api = async (url, options) => {
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
  // if (rawRes.status === 401 && token) {
  //   //remove token & retry
  //   removeToken()
  //   return api(url, options)
  // }

  if (rawRes.status >= 400) {
    handleApiErrors(rawRes.status, res.errors)
  }

  return res
}

export { api }
