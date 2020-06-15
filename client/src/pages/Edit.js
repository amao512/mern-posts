import React, { useState, useEffect } from 'react'
import { CreateForm } from '../components/styled-components/createForm.styled'
import { updatePostThunk, getPostsThunk, deletePostThunk } from '../redux/thunks/postsThunk'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Preloader from '../components/Preloader/Preloader'

const Edit = ({ updatePostThunk, token, posts, getPostsThunk, deletePostThunk, ...props }) => {
    const [form, setForm] = useState({ title: '', text: '' })
    const [post, setPost] = useState(null)
    const postId = useParams().id

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSave = async () => {

        const editedPost = { ...form, _id: post._id }

        if(form.title !== '' && form.text !== ''){
            await updatePostThunk(editedPost, token)
            props.history.push('/feed')
        }
    }

    const onDelete = async () => {
        await deletePostThunk(post._id, token)
        props.history.push('/feed')
    }

    useEffect(() => {
        if(!post){
            setPost(posts.find(post => post._id === postId))
        }
    }, [posts, post, postId])

    useEffect(() => {
        if(post){
            setForm({ title: post.title, text: post.text })
        }
    }, [post, posts])
    

    if(!posts){
        return <Preloader />
    }

    return (
        <CreateForm>
            <input type='text' 
                   name='title' 
                   placeholder='Title' 
                   alt='title'
                   value={form.title}
                   onChange={handleChange}
            />
            <textarea name='text' cols='100' value={form.text} onChange={handleChange}></textarea>

            <div className='btn'>
                <button onClick={onDelete} className='delete' name='btn'>Delete</button>
                <button onClick={onSave} name='btn'>Save</button>
            </div>
        </CreateForm>
    )
}

const mstp = state => ({
    token: state.auth.token,
    posts: state.post.posts || []
})

export default connect(mstp, { updatePostThunk, getPostsThunk, deletePostThunk })(Edit)
