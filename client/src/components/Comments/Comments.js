import React, { useState, useEffect } from 'react'
import s from './comments.module.scss'
import Comment from '../Comment'
import { connect } from 'react-redux'
import { createCommentThunk, getCommentsThunk } from '../../redux/thunks/commentsThunk'

const Comments = ({ comments, postId, token, createCommentThunk, getCommentsThunk }) => {
    const [comment, setComment] = useState('')

    const onSubmit = e => {
        e.preventDefault()

        if(comment !== ''){
            createCommentThunk({ comment }, postId, token)
            getCommentsThunk()
            setComment('')
        }
    }

    useEffect(() => {
        getCommentsThunk()
    }, [getCommentsThunk])

    return (
        <div className={s.comments}>
            <p>Comments: {comments.length}</p>

            <form onSubmit={onSubmit}>
                <textarea type='text' placeholder='Type a comment...' value={comment} onChange={e => setComment(e.target.value)} />

                <button>Send</button>
            </form>

            <div className={s.commentsBlock}>
                {comments.length === 0 ? <div>There is no any kind of comments</div> 
                    : comments.map(comment => (
                        <Comment key={comment._id} comment={comment} />
                    )
                )}
            </div>
        </div>
    )
}

const mstp = state => ({
    token: state.auth.token
})

export default connect(mstp, { createCommentThunk, getCommentsThunk })(Comments)
