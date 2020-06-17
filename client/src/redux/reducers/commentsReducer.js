import { GET_COMMENTS, ADD_COMMENT } from "../constants"

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        default:
            return state
    }
}