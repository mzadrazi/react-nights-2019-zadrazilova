import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'

/*
 * state shape:
 * {
 *  <product_id>: <qtty>,
 *  ...
 * }
 */

const removeProduct = (state, productId) => {
  const quantity = state[productId]

  if (quantity > 1) {
    return {
      ...state,
      [productId]: state[productId] - 1,
    }
  }

  return Object.keys(state).reduce((newState, key) => {
    if (key !== productId) {
      newState[key] = state[key]
    }

    return newState
  }, {})
}

const reducer = (state = {}, action) => {
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