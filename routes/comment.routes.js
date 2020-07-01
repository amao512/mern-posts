const Router = require('express')
const router = Router()
const auth = require('../middleware/auth')

const Comment = require('../models/Comment')

// @ GET /api/comments/
// Get comments
router.get('/', async (req, res) => {
    try {

        const comments = await Comment.find().sort({ date: -1 })

        if(!comments){
            return res.status(404).json({ message: 'Comments Not Found' })
        }

        res.json(comments)

    } catch (e){
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})


// @ POST /api/comments/create/:postId
// Create a comment
router.post('/create/:postId', auth, async (req, res) => {
    try {
        const { comment } = req.body

        const newComment = new Comment({ text: comment, post: req.params.postId, owner: req.user.userId })

        await newComment.save()

        res.status(201).json({ comment: newComment })
    } catch (e){
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ PUT /api/comments/edit/:commentId
// Update a comment

router.put('/edit/:commentId', auth, async (req, res) => {
    try {
        let comment = await Comment.findById(req.params.commentId)

        if(!comment){
            return res.status(404).json({ message: 'Comment Not Found' })
        }

        const newPost = {
            post: req.body.postId,
            owner: req.user.userId,
            text: req.body.text
        }

        comment = await Comment.findByIdAndUpdate(req.params.commentId, { $set: newPost }, { new: true })

        await comment.save()

        res.json({ message: 'Comment updated successfully' })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ DELETE /api/comments/delete/:commentId
// Delete a comment

router.delete('/delete/:commentId', auth, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId)

        if(!comment){
            return res.status(404).json({ message: 'Comment Not Found' })
        }

        await comment.remove()

        res.json({ message: 'Comment deleted successfully' })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})


module.exports = router