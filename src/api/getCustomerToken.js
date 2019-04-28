import { config } from '../config'
import { AsyncValidationError } from '../utils/errors'

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
      const res = await rawRes.json()

      return {
        token: res.access_token,
        clientId: res.owner_id,
        //TODO: refresh token
      }
    }
    case 401:
      throw new AsyncValidationError('Wrong email or password.')
    default:
      throw new Error('Unexpected login error')
  }
}
