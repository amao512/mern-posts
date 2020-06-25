import { CommentsAPI } from "../../api"
import { getComments, addComment } from "../actions/commentsActions"

export const getCommentsThunk = () => async dispatch => {
    const data = await CommentsAPI.get()

    return dispatch(getComments(data))
}

export const createCommentThunk = (comment, postId, token) => async dispatch => {
    const data = await CommentsAPI.create(comment, postId, token)

    return dispatch(addComment(data))
}

export const deleteCommentThunk = (commentId, token) => async () => {
    await CommentsAPI.delete(commentId, token)
}

export const updateCommentThunk = (commentId, postId, text, token) => async () => {
    await CommentsAPI.update(commentId, postId, text, token)
}