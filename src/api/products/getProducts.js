import qs from 'qs'
import { api } from '../apiClient'

export const getProducts = async urlParams => {
  const { data, meta, included } = await api(
    `/api/skus?${qs.stringify({ include: 'prices', ...urlParams })}`
  )

  const products = data.map(product => ({
    id: product.id,
    name: product.attributes.name,
    imgUrl: product.attributes.image_url,
    price: included.find(
      price => price.id === product.relationships.prices.data[0].id
    ).attributes,
  }))

  return {
    products,
    meta,
  }
}
