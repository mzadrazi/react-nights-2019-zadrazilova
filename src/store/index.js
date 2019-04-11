import { createStore, combineReducers } from 'redux'

import products from './products'
import cart from './cart'

const reducer = combineReducers({
  cart,
  products,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
