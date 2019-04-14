// action types
export const LOGIN = 'userSession/LOGIN'
export const LOGOUT = 'userSession/LOGOUT'

// action creators
export const login = userInfo => ({
  type: LOGIN,
  payload: userInfo,
})

export const logout = () => ({
  type: LOGOUT,
})
