import { GET_PROFILE_DATA } from "../constants"

const initialState = {
    data: null,
    image: null
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PROFILE_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}