import { 
    LOGIN_AUTH, SET_AUTH_ERROR, LOGOUT_AUTH, 
    GET_AUTH_DATA, CLEAR_AUTH_ERROR, SET_AUTH_STORAGE 
} from "../constants";


export const authLogin = () => ({ type: LOGIN_AUTH })
export const authLogout = () => ({ type: LOGOUT_AUTH })
export const getAuthData = data => ({ type: GET_AUTH_DATA, payload: data })
export const setAuthError = error => ({ type: SET_AUTH_ERROR, payload: error })
export const clearAuthError = () => ({ type: CLEAR_AUTH_ERROR })
export const setAuthStorage = (token, userId) => ({ type: SET_AUTH_STORAGE, payload: { token, userId } })