import { GET_FILES, DELETE_FILE, UPLOAD_IMAGE } from "../constants"

const initialState = {
    files: []
}

export const fileReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FILES:
            return {
                ...state,
                files: action.payload
            }
        case UPLOAD_IMAGE:
            console.log(action.payload)
            return {
                ...state,
                files: [ ...state.files, action.payload ]
            }
        case DELETE_FILE:
            return {
                ...state,
                files: state.files.filter(file => file.uploadId !== action.payload)
            }
        default:
            return state
    }
}