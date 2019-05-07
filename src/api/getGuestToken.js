import { config } from '../config'
import { setToken } from '../utils/token'

/**
 * Fetches the guest token from API and saves it
 * @returns {string} Guest access token
 */
export const getGuestToken = async () => {
  const reqBody = {
    grant_type: 'client_credentials',
    client_id: `${config.clientId}`,
    scope: `${config.scope}`,
  }

  const res = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  })

  //TODO: error handling

  const { access_token } = await res.json()
  setToken(access_token)
  return access_token
}
