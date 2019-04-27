import { getProduct } from './getProduct'

export const getProductsByIds = async productIds => {
  return await Promise.all(productIds.map(getProduct))
}
