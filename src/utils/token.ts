export const GUEST_TOKEN = 'token'
export const REFRESH_TOKEN = 'refresh_token'

export const setToken = (token: string, type = GUEST_TOKEN) =>
  window.localStorage.setItem(`${type}`, token)

export const getToken = (type = GUEST_TOKEN) =>
  window.localStorage.getItem(`${type}`)

export const removeToken = (type = GUEST_TOKEN) =>
  window.localStorage.removeItem(`${type}`)
