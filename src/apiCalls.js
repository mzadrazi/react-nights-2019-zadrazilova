import config from './config'

export const getToken = () =>
  fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: `${config.clientId}`,
      scope: `${config.scope}`,
    }),
  })
    .then(response => response.json())
    .then(json => json.access_token)

export const getProducts = token =>
  fetch(`${config.apiUrl}/api/skus`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/vnd.api+json',
    },
  })
    .then(response => response.json())
    .then(json => json.data)
