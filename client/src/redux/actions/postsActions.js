import { GET_POSTS, CLEAR_DATA, DELETE_POST, CREATE_POST, UPDATE_POST } from "../constants";

export const getPosts = data => ({ type: GET_POSTS, payload: data })
export const deletePost = id => ({ type: DELETE_POST, payload: id })
export const createPost = post => ({ type: CREATE_POST, payload: post })
export const updatePost = post => ({ type: UPDATE_POST, payload: post })
export const clearData = () => ({ type: CLEAR_DATA })