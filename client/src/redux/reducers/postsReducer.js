import { GET_POSTS, CLEAR_DATA, DELETE_POST, CREATE_POST, UPDATE_POST } from "../constants"

const initialState = {
    posts: null,
    editPost: null
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POSTS:
            return { ...state, posts: action.payload }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post._id !== action.payload) }
        case CREATE_POST:
            return { ...state, posts: [action.payload, ...state.posts] }
        case CLEAR_DATA:
            return { ...state, posts: null }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post._id === action.payload._id){
                        return action.payload
                    }
                    return post
                })
            }
        default:
            return state
    }
}