import React, { memo, useState, useEffect } from 'react'
import PostContainer from './PostContainer'
import { NavLink } from 'react-router-dom'
import { Search } from '../generic/styled-components/search.styled'
import s from './posts.module.css'

const Posts = memo(({ posts, isAdmin = true }) => {

    const [foundPosts, setFoundPosts] = useState([])

    const onSearch = e => {
        const reg = new RegExp(e.target.value, 'gi')
        
        setFoundPosts(posts.filter(post => post.title.match(reg)))
    }

    useEffect(() => {
        setFoundPosts(posts)
    }, [posts])

    return (
        <div className={s.posts}>
            <Search type='text' placeholder='Search' alt='posts-searching' onChange={onSearch} />

            {isAdmin && 
                <div className={s.postsCreate}>
                    <NavLink to='/create'><input placeholder="What's new?" /></NavLink>
                </div>
            }

            {foundPosts === null 
                ? <div className='no-posts'>There is no any kind of posts</div> 
                : foundPosts.map(post => (
                    <PostContainer key={post._id} post={post} />
                ))
            }
        </div>
    )
})

export default  Posts
