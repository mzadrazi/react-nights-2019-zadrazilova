// action types
export const ADD_PRODUCT = 'cart/ADD' as 'cart/ADD'
export const REMOVE_PRODUCT = 'cart/REMOVE' as 'cart/REMOVE'

export type CartAction = ReturnType<typeof addProduct | typeof removeProduct>

// action creators
export const addProduct = (productId: number) => ({
  type: ADD_PRODUCT,
  payload: productId,
})

export const removeProduct = (productId: number) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
})
