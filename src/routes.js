import { generatePath } from 'react-router-dom'

export const HOMEPAGE = '/'
export const PRODUCT_LIST = '/products'
export const PRODUCT_DETAIL = '/products/:productId'
export const CART = '/cart'
export const SIGN_UP = '/sign_up'
export const LOGIN = '/login'
export const LOGOUT = '/logout'
export const MY_ACCOUNT = '/my-account'

export const getProductDetailRoute = productId =>
  generatePath(PRODUCT_DETAIL, { productId })
