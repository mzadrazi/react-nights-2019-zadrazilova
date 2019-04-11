// action types
export const LOAD_PRODUCTS = 'products/LOAD'

// action creators
export const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  payload: products,
})
