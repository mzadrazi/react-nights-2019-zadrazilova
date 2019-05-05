import qs from 'qs'
import { api } from '../apiClient'

type UrlParams = {
  page: {
    number: number
  }
}

type Product = {
  id: string
  attributes: {
    name: string
    image_url: string
  }
  relationships: {
    prices: {
      data: ReadonlyArray<{
        id: string
      }>
    }
  }
}

type Meta = {
  page_count: number
}

type Included = ReadonlyArray<{
  id: string
  attributes: {
    formatted_amount: string
  }
}>

export const getProducts = async (urlParams: UrlParams) => {
  const {
    data,
    meta,
    included,
  }: {
    data: ReadonlyArray<Product>
    meta: Meta
    included: Included
  } = await api(
    `/api/skus?${qs.stringify({ include: 'prices', ...urlParams })}`
  )

  const products = data.map(product => ({
    id: product.id,
    name: product.attributes.name,
    imgUrl: product.attributes.image_url,
    price: included.find(
      price => price.id === product.relationships.prices.data[0].id
    )!.attributes,
  }))

  return {
    products,
    meta,
  }
}
