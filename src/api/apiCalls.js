import config from '../config'

export const getToken = async () => {
  const res = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: `${config.clientId}`,
      scope: `${config.scope}`,
    }),
  })

  const resData = await res.json()
  return resData.access_token
}

export const getProducts = async () => {
  const token = await getToken()

  const res = await fetch(`${config.apiUrl}/api/skus?include=prices`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/vnd.api+json',
    },
  })

  const rawProducts = await res.json()

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

const parseProductDetail = ({ data, included }) => {
  return {
    id: data.id,
    name: data.attributes.name,
    description: data.attributes.description,
    imgUrl: data.attributes.image_url,
    price: included.find(itm => itm.type === 'prices').attributes,
  }
}

export const getProduct = async id => {
  const token = await getToken()

  const res = await fetch(`${config.apiUrl}/api/skus/${id}?include=prices`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/vnd.api+json',
    },
  })

  const rawProduct = await res.json()
  return parseProductDetail(rawProduct)
}
