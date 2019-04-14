import { api } from '../apiClient'

export const getCustomer = async customerId => {
  const data = await api(`/api/customers/${customerId}`)
  console.log(data)
}
