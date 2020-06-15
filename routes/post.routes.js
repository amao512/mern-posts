const Router = require('express')
const router = Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Post = require('../models/Post')

// @ GET /api/posts
// Get all posts of other users

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 })

        res.json(posts)
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ GET /api/posts/own
// Get posts by token

router.get('/own', auth, async (req, res) => {
    try {
        const posts = await Post.find({ owner: req.user.userId }).sort({ date: -1 })

        if(!posts){
            return res.status(404).json({ message: 'Posts Not Found' })
        }

        res.json(posts)
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ POST /api/posts/create
// Create a post

router.post('/create', [
    check('title', 'Please, fill the title').notEmpty(),
    check('text', 'Please, fill the text').notEmpty()
], auth, async (req, res) => {
    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({ error: errors.array(), message: 'Input Errors' })
        }

        const { title, text } = req.body

        const post = new Post({ title, text, owner: req.user.userId })

        await post.save()

        res.status(201).json({ post })

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ GET /api/posts/:id
// Get post

router.get('/:id', async (req, res) => {
    try {
        const p = await Post.findById(req.params.id)

        if(!p){
            return res.status(404).json({ message: 'Post Not Found' })
        }

        p.views++

        p.save()

        res.json({ post: p })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ PUT /api/posts/update/:id
// Update a post

router.put('/update/:id', auth, async (req, res) => {
    try {
        const { title, text } = req.body
        const updatedPost = { title, text }

        let post = await Post.findById(req.params.id)

        if(!post){
            return res.status(404).json({ message: 'Post Not Found' })
        }

        post = await Post.findByIdAndUpdate(req.params.id, { $set: updatedPost }, { new: true })

        await post.save()

        res.json(post)

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ DELETE /api/posts/delete/:id
// Delete a post

router.delete('/delete/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if(!post){
            return res.status(404).json({ message: 'Post Not Found' })
        }

        await post.remove()

        res.json({ message: 'Post deleted successfully' })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

module.exports = router