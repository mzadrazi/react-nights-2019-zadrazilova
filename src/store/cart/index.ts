import * as R from 'ramda'
import { ADD_PRODUCT, REMOVE_PRODUCT, CartAction } from './actions'

/*
 * state shape:
 * {
 *  <product_id>: <qtty>,
 *  ...
 * }
 */
type CartState = {}

const removeProduct = (state, productId) => {
  const quantity = state[productId]

  if (quantity > 1) {
    return {
      ...state,
      [productId]: state[productId] - 1,
    }
  }

  return R.dissoc(`${productId}`, state)
}

const reducer = (state = {}, action: CartAction) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      }
    case REMOVE_PRODUCT:
      return removeProduct(state, action.payload)
    default:
      return state
  }
}

export default reducer
