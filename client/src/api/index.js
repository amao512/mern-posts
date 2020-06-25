import axios from 'axios'

const instance = axios.create({
    baseUrl: 'http://localhost:5000',
    headers: { 'Content-Type': 'application/json' }
})

export const AuthAPI = {
    async login(userData){
        const res = await instance.post('/api/auth/login', userData)
        return res.data
    },
    async register(userData){
        const res = await instance.post('/api/auth/register', userData)
        return res.data
    },
}

export const PostsAPI = {
    async get(){
        const res = await instance.get('/api/posts')
        return res.data
    },
    async create(postData, token){
        const res = await instance.post('/api/posts/create', postData, { headers: { 'auth-token': token } })
        return res.data
    },
    async delete(postId, token){
        const res = await instance.delete(`/api/posts/delete/${postId}`, { headers: { 'auth-token': token } })
        return res.data
    },
    async update(postData, token){
        const res = await instance.put(`/api/posts/update/${postData._id}`, postData, { headers: { 'auth-token': token } })
        return res.data
    },
    async getOne(id){
        const res = await instance.get(`/api/posts/${id}`)
        return res.data
    }
}

export const UsersAPI = {
    async get(){
        const res = await instance.get('/api/user')
        return res.data
    }
}

export const CommentsAPI = {
    async get(){
        const res = await instance.get('/api/comments/')
        return res.data
    },
    async create(comment, postId, token){
        const res = await instance.post(`/api/comments/create/${postId}`, comment, { headers: { 'auth-token': token } })
        return res.data
    },
    async delete(commentId, token){
        await instance.delete(`/api/comments/delete/${commentId}`, { headers: { 'auth-token': token } })
    }
}

export const ProfileAPI = {
    async getProfile(token){
        const res = await instance.get('/api/profile', { headers: { 'auth-token': token } })
        return res.data
    },
}

export const FilesAPI = {
    async getFiles(){
        const res = await instance.get('/api/files')
        return res.data
    },
    async uploadImage(img, token){
        const res = await instance.post('/api/files/uploadImage', img, { 
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': token,

            } 
        })

        return res.data
    },
    async deleteFile(id, token){
        await instance.delete(`/api/files/delete/${id}`, { headers: { 'auth-token': token } })
    }
}

export const LikeDislikeAPI = {
    // body = { postId or commentId }
    async getLikes(){
        const res = await instance.get('/api/likeDislike/getLikes')
        return res.data
    },

    async getDislikes(){
        const res = await instance.get('/api/likeDislike/getDislikes')
        return res.data
    },

    async upLike(body, token){
        const res = await instance.post('/api/likeDislike/upLike', body, { headers: { 'auth-token': token } })
        return res.data
    },

    async unLike(body, token){
        const res = await instance.post('/api/likeDislike/unLike', body, { headers: { 'auth-token': token } })
        return res.data
    },

    async upDislike(body, token){
        const res = await instance.post('/api/likeDislike/upDislike', body, { headers: { 'auth-token': token } })
        return res.data
    },

    async unDislike(body, token){
        const res = await instance.post('/api/likeDislike/unDislike', body, { headers: { 'auth-token': token } })
        return res.data
    }
}