import { api } from '../apiClient'

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

  // TODO: fix - error handling (422 - email exists)
  const res = await api('/api/customers', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  })

  return res
}
