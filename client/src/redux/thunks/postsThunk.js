import { PostsAPI } from "../../api"
import { getPosts, deletePost, createPost, updatePost } from "../actions/postsActions"

export const getPostsThunk = token => async dispatch => {
    const data = await PostsAPI.get(token)

    return dispatch(getPosts(data))
}

export const createPostThunk = (postData, token) => async dispatch => {
    await PostsAPI.create(postData, token)

    return dispatch(createPost(postData))
}

export const deletePostThunk = (postId, token) => async dispatch => {
    await PostsAPI.delete(postId, token)

    return dispatch(deletePost(postId))
}

export const updatePostThunk = (postData, token) => async dispatch => {
    await PostsAPI.update(postData, token)

    return dispatch(updatePost(postData))
}

export const getOnePostThunk = postId => async () => {
    await PostsAPI.getOne(postId)
}