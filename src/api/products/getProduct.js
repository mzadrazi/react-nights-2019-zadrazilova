import { api } from '../apiClient'
import { parseProduct } from './utils/parseProduct'

export const getProduct = async productId => {
  const rawProduct = await api(`/api/skus/${productId}?include=prices`)
  return parseProduct(rawProduct)
}
