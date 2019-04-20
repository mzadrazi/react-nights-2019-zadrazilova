import { config } from '../config'
import { api } from './apiClient'

export const getCustomerToken = async ({ email, password }) => {
  const reqBody = {
    grant_type: 'password',
    username: `${email}`,
    password: `${password}`,
    client_id: `${config.clientId}`,
    scope: `${config.scope}`,
  }

  const res = await api('/oauth/token', {
    method: 'POST',
    body: JSON.stringify(reqBody),
  })

  return {
    token: res.access_token,
    clientId: res.owner_id,
    //TODO: refresh token
  }
}
