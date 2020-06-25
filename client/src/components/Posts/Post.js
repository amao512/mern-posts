import React from 'react'
import InfoHead from '../generic/InfoHead/InfoHead'
import InfoFooter from '../generic/InfoFooter/InfoFooter'
import { PostCard } from './postCard.styled'
import { NavLink } from 'react-router-dom'

const Post = ({ post, admin, isAdmin, user, onDeletePost, isReading, comments, likes, dislikes }) => {
    return (
        <PostCard>
            <InfoHead isAdmin={isAdmin} admin={admin} user={user} info={post} onDelete={onDeletePost} />

            <h1 className='title'>
                {!isReading ? (
                    <NavLink to={`/p/${post._id}`}>
                        {post.title}
                    </NavLink>
                    ) : `${post.title}`
                }
            </h1>

            <p className='text'>{post.text}</p>

            <InfoFooter likes={likes} dislikes={dislikes} info={post} comments={comments}/>
        </PostCard>
    )
}

export default Post
