import React from 'react'
import { PostCard } from './styled-components/postCard.styled'
import { NavLink } from 'react-router-dom'
import userPhoto from '../assets/images/profile.png'
import Preloader from './Preloader/Preloader'

const Post = ({ post, admin, isAdmin, user, onDeletePost, isReading }) => {
    if(!post){
        return <Preloader />
    }

    return (
        <PostCard>
            <div className='post-head'>
                <div className='author'>
                    <NavLink to={isAdmin ? '/profile' : `/profile/${user && user._id}`}>
                        {/* <span className="material-icons">account_circle</span> */}
                        <img src={userPhoto} alt='user-img' />
                    </NavLink>
                    <div className='info'>
                        <NavLink to={isAdmin ? '/profile' : `/profile/${user && user._id}`}>
                            <p>{isAdmin ? (
                                admin && `${admin.name} ${admin.lastName}`
                                ) : (
                                    user && `${user.name} ${user.lastName}`
                                )}
                            </p>
                        </NavLink>
                        <span className='date'>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                </div>
                
                <div className='drag-menu'>
                    {isAdmin && <span className='material-icons'>drag_indicator</span>}
                    <ul>
                    <NavLink to={`/edit/${post._id}`}>
                        <li>Edit</li>    
                    </NavLink>
                        <li onClick={onDeletePost}>Delete</li>
                    </ul>
                </div>
            </div>

            <h1 className='title'>
                {!isReading ? <NavLink to={`/p/${post._id}`}>{post.title}</NavLink> : `${post.title}`}
            </h1>

            <p className='text'>{post.text}</p>

            <div className='post-footer'>
                <div className='views'>
                    <span className="material-icons">visibility</span>
                    <p>{post.views}</p>
                </div>
                {!isReading && 
                    <button>
                        <NavLink to={`/p/${post._id}`}>Read</NavLink>
                    </button>
                }
            </div>
        </PostCard>
    )
}

export default Post
