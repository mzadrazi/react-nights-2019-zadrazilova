import { config } from '../config'
import { setToken, REFRESH_TOKEN } from '../utils/token'

/**
 * Refreshes customer token and saves new values of access and refresh tokens
 * @param {string} refreshToken Refresh token
 * @returns {string} New access token
 */
export const refreshCustomerToken = async refreshToken => {
  const reqBody = {
    grant_type: 'refresh_token',
    refresh_token: `${refreshToken}`,
    client_id: `${config.clientId}`,
    client_secret: `${config.clientSecret}`,
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
      const { access_token, refresh_token } = await rawRes.json()

      setToken(access_token)
      setToken(refresh_token, REFRESH_TOKEN)

      return access_token
    }
    default:
      throw new Error('Cannot refresh customer token')
  }
}
