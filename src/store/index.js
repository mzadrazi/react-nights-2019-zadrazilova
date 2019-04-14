import { createStore, combineReducers } from 'redux'

import products from './products'
import cart from './cart'
import userSession from './userSession'

const reducer = combineReducers({
  cart,
  products,
  userSession,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
