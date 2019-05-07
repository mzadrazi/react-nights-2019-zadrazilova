export type CustomerType = {
  clientId: string
  email: string
  firstName: string
  status: string
}

export type ProductType = {
  id: string
  name: string
  description: string
  imgUrl: string
  price: {
    formatted_amount: string
    amount_float: number
    currency_code: string
  }
}
