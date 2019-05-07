import { api } from '../apiClient'

export const getCustomer = async (customerId: string) => {
  const { data } = await api(`/api/customers/${customerId}`)

  const metadata = data.attributes.metadata

  return {
    email: data.attributes.email,
    firstName: metadata && metadata.firstName,
    status: data.attributes.status,
  }
}
