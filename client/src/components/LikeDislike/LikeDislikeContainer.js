import React, { useState, useEffect } from 'react'
import LikeDislike from './LikeDislike'
import { connect } from 'react-redux'
import { upLikeThunk, unLikeThunk, getLikesThunk, unDislikeThunk, upDislikeThunk, getDislikesThunk } from '../../redux/thunks/likesDislikesThunk'

const LikeDislikeContainer = ({ userId, token, likes, dislikes, infoId, upLikeThunk, post, unLikeThunk, getLikesThunk, unDislikeThunk, upDislikeThunk, getDislikesThunk }) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const onLike = async () => {
        const body = post ? { postId: infoId } : { commentId: infoId }

        if(liked){
            await unLikeThunk(body, token)
            await getLikesThunk()
            return getDislikesThunk()
        }

        await upLikeThunk(body, token)
        getLikesThunk()
        getDislikesThunk()
    }

    const onDislike = async () => {
        const body = post ? { postId: infoId } : { commentId: infoId }

        if(disliked){
            await unDislikeThunk(body, token)
            getDislikesThunk()
            return getLikesThunk()
        }

        await upDislikeThunk(body, token)
        getDislikesThunk()
        getLikesThunk()
    }

    useEffect(() => {
        const like = likes.find(like => like.userId === userId)
        setLiked(!!like)
    }, [userId, likes])

    useEffect(() => {
        const dislike = dislikes.find(dislike => dislike.userId === userId)
        setDisliked(!!dislike)
    }, [userId, dislikes])

    return <LikeDislike liked={liked} 
                        disliked={disliked} 
                        likesCount={likes.length}
                        dislikesCount={dislikes.length}
                        onLike={onLike} 
                        onDislike={onDislike}
            />
}

const mstp = state => ({
    userId: state.auth.userId,
    token: state.auth.token
})

export default connect(mstp, { upLikeThunk, unLikeThunk, getLikesThunk, unDislikeThunk, upDislikeThunk, getDislikesThunk })(LikeDislikeContainer)
