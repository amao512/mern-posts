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

// @ DELETE /api/comments/delete/:commentId

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