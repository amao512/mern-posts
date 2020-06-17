import React from 'react'
import { PostCard } from './styled-components/postCard.styled'
import { NavLink } from 'react-router-dom'
import Preloader from './Preloader/Preloader'
import InfoHead from './common/InfoHead'
import InfoFooter from './common/InfoFooter'

const Post = ({ post, admin, isAdmin, user, onDeletePost, isReading, comments }) => {
    if(!post){
        return <Preloader />
    }

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

            <InfoFooter info={post} comments={comments} />
        </PostCard>
    )
}

export default Post
