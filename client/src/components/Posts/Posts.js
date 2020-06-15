import React, { memo, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import PostContainer from '../../containers/PostContainer'
import Preloader from '../Preloader/Preloader'
import s from './posts.module.css'
import { Search } from '../styled-components/search.styled'

const Posts = memo(({ posts, isAdmin = true }) => {

    const [foundPosts, setFoundPosts] = useState([])

    const onSearch = e => {
        const reg = new RegExp(e.target.value, 'gi')
        
        setFoundPosts(posts.filter(post => post.title.match(reg)))
    }

    useEffect(() => {
        setFoundPosts(posts)
    }, [posts])

    if(!posts){
        return <Preloader />
    }

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

export default Posts
