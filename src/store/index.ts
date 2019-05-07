import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import cart from './cart'
import userSession from './userSession'

const reducer = combineReducers({
  cart,
  userSession,
})

export type AppState = ReturnType<typeof reducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...[thunk]))
)

export default store
