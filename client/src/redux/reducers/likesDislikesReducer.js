import { GET_LIKES, GET_DISLIKES } from "../constants"

const initialState = {
    likes: [],
    dislikes: []
}

export const likesDislikesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_LIKES:
            return { ...state, likes: action.payload }
        case GET_DISLIKES:
            return { ...state, dislikes: action.payload }
        default:
            return state
    }
}