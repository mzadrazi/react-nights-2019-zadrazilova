import { config } from '../config'
import { getToken, REFRESH_TOKEN } from '../utils/token'
import { getGuestToken } from './getGuestToken'
import { refreshCustomerToken } from './refreshCustomerToken'
import { AsyncValidationError } from '../utils/errors'
import * as routes from '../routes'

const handleApiErrors = (statusCode, errors) => {
  if (statusCode >= 400 && statusCode < 500) {
    throw new AsyncValidationError(errors[0].detail)
  }

  throw new Error(`API server error`)
}

const makeRequest = (url, options, token) =>
  fetch(`${config.apiUrl}${url}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/vnd.api+json',
    },
    ...options,
  })

const api = async (url, options) => {
  // get token from local storage
  let token = getToken() || (await getGuestToken())

  try {
    let rawRes = await makeRequest(url, options, token)

    // expired token
    if (rawRes && rawRes.status === 401) {
      const refreshToken = getToken(REFRESH_TOKEN)

      if (refreshToken) {
        token = await refreshCustomerToken(refreshToken)
      } else {
        token = await getGuestToken()
      }

      rawRes = await makeRequest(url, options, token)
    }

    if (rawRes && rawRes.status === 401) {
      window.location.assign(routes.LOGOUT)
    }

    const res = await rawRes.json()
    if (rawRes.status >= 400) {
      handleApiErrors(rawRes.status, res.errors)
    }

    return res
  } catch (error) {
    throw error
  }
}

export { api }
