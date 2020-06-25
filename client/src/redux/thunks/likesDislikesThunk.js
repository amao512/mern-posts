import { LikeDislikeAPI } from '../../api'
import { getLikes, getDislikes } from '../actions/likeDislikeActions'

export const getLikesThunk = () => async dispatch => {
    const likes = await LikeDislikeAPI.getLikes()

    return dispatch(getLikes(likes))
}


export const getDislikesThunk = () => async dispatch => {
    const dislikes = await LikeDislikeAPI.getDislikes()

    return dispatch(getDislikes(dislikes))
}

export const upLikeThunk = (body, token) => async () => {
    await LikeDislikeAPI.upLike(body, token)
}

export const unLikeThunk = (body, token) => async () => {
    await LikeDislikeAPI.unLike(body, token)
}

export const upDislikeThunk = (body, token) => async () => {
    await LikeDislikeAPI.upDislike(body, token)
}

export const unDislikeThunk = (body, token) => async () => {
    await LikeDislikeAPI.unDislike(body, token)
}