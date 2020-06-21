import { LOGIN_AUTH, LOGOUT_AUTH, SET_AUTH_ERROR, CLEAR_AUTH_ERROR, SET_AUTH_STORAGE } from "../constants"

const initialState = {
    isAuth: false,
    token: null,
    userId: null,
    error: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_AUTH:
            return {
                ...state,
                isAuth: true,
                error: null,
            }
        case LOGOUT_AUTH:
            return {
                ...state,
                isAuth: false,
                token: null,
                userId: null
            }
        case SET_AUTH_STORAGE:
            return {
                ...state,
                isAuth: true,
                token: action.payload.token,
                userId: action.payload.userId,
                error: null
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                isAuth: false,
                error: action.payload
            }
        case CLEAR_AUTH_ERROR:
            return { ...state, error: null }
        default:
            return state
    }
}