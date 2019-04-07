// action types
export const ADD_PRODUCT = 'cartItems/ADD'
export const REMOVE_PRODUCT = 'cartItems/REMOVE'

// action creators
export const addProduct = productId => ({
  type: ADD_PRODUCT,
  payload: productId,
})

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  payload: productId,
})
