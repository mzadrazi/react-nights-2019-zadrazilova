import config from '../config'
import { getToken } from './apiCalls'

export const createCustomer = async ({ email, password, firstName }) => {
  const requestBody = {
    data: {
      type: 'customers',
      attributes: {
        email,
        password,
        metadata: {
          firstName,
        },
      },
    },
  }

  const token = await getToken()

  const rawRes = await fetch(`${config.apiUrl}/api/customers`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestBody),
  })

  console.log(rawRes)

  const res = await rawRes.json()

  console.log(res)

  if (res.status !== 201) {
    throw new Error(res.errors[0].details)
  }

  return res
}
