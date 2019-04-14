// action types
export const LOGIN = 'userSession/LOGIN'
export const LOGOUT = 'userSession/LOGOUT'

// action creators
export const login = userInfo => ({
  type: LOGIN,
  payload: userInfo,
})

// TODO: remove token from storage during logout - where should it be implemented?
export const logout = () => ({
  type: LOGOUT,
})
