import { LOGIN, LOGOUT } from './actions'

const INITIAL_STATE = {
  customer: null,
  isAuthenticated: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        customer: { ...action.payload },
        isAuthenticated: true,
      }
    case LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}

export default reducer
