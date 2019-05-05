import { api } from '../apiClient'
import { parseProduct } from './utils/parseProduct'

export const getProduct = async (productId: string) => {
  const rawProduct = await api(`/api/skus/${productId}?include=prices`)
  return parseProduct(rawProduct)
}
