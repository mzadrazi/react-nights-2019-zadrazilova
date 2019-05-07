import { getProduct } from './getProduct'

export const getProductsByIds = async (productIds: string[]) => {
  return await Promise.all(productIds.map(getProduct))
}
