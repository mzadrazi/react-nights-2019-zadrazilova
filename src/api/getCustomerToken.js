import { config } from '../config'
import { AsyncValidationError } from '../utils/errors'

/**
 * Fetches customer token from API
 * @param {string} email Customer's email
 * @param {string} password Customer's password
 * @returns {{clientId: string, refreshToken: string, token: string}} ID of customer, refreshToken and customer access token
 */
export const getCustomerToken = async ({ email, password }) => {
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
      'Content-type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  })

  switch (rawRes.status) {
    case 200: {
      const { owner_id, refresh_token, access_token } = await rawRes.json()

      return {
        clientId: owner_id,
        refreshToken: refresh_token,
        token: access_token,
      }
    }
    case 401:
      throw new AsyncValidationError('Wrong email or password.')
    default:
      throw new Error('Unexpected login error')
  }
}
