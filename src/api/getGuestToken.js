import config from '../config'

export const getGuestToken = async () => {
  const res = await fetch(`${config.apiUrl}/oauth/token`, {
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

  const resData = await res.json()
  return resData.access_token
}
