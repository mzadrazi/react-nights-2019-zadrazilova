import { LOGIN, LOGOUT } from './actions'
import { CustomerType } from '../../global/types'
import { UserSessionAction } from './actions'

type UserSessionState = {
  isAuthenticated: boolean
  customer: CustomerType | null
}

const INITIAL_STATE = {
  customer: null,
  isAuthenticated: false,
}

const reducer = (
  state: UserSessionState = INITIAL_STATE,
  action: UserSessionAction
): UserSessionState => {
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
