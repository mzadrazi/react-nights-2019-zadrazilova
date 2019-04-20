import { api } from '../apiClient'

export const getProducts = async () => {
  const rawProducts = await api(`/api/skus?include=prices`)

  const products = rawProducts.data.map(product => ({
    id: product.id,
    name: product.attributes.name,
    imgUrl: product.attributes.image_url,
    price: rawProducts.included.find(
      price => price.id === product.relationships.prices.data[0].id
    ).attributes,
  }))

  return products
}
