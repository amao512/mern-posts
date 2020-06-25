const Router = require('express')
const router = Router()
const auth = require('../middleware/auth')

const Like = require('../models/Like')
const Dislike = require('../models/Dislike')

// @ GET /api/likeDislike/getLikes
// @ Get likes
router.get('/getLikes', async (req, res) => {
    try {

        const likes = await Like.find()

        if(!likes){
            return res.status(400).json({ message: 'Likes Not Found' })
        }

        res.json(likes)

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error' })
    }
})

// @ GET /api/likeDislike/getDislikes
// @ Get dislikes
router.get('/getDislikes', async (req, res) => {
    try {
        
        const dislikes = await Dislike.find()

        res.json(dislikes)
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error' })
    }
})

// @ POST /api/likeDislike/upLike
// @ put like
router.post('/upLike', auth, async (req, res) => {
    try {
        let variable = {}

        if(req.body.postId){
            variable = { postId: req.body.postId, userId: req.user.userId }
        } else {
            variable = { commentId: req.body.commentId, userId: req.user.userId }
        }

        await Dislike.findOneAndDelete(variable)
        // await dislike.remove()

        const like = new Like(variable)
        await like.save()

        res.status(201).json({ message: 'Successfully liked it' })

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error' })
    }
})

// @ POST /api/likeDislike/unLike
// @ Unlike
router.post('/unLike', auth, async (req, res) => {
    try {
        let variable = {}

        if(req.body.postId){
            variable = { postId: req.body.postId, userId: req.user.userId }
        } else {
            variable = { commentId: req.body.commentId, userId: req.user.userId }
        }

        const like = await Like.findOne(variable)

        if(!like){
            return res.status(400).json({ message: 'Like Not Found' })
        }

        await like.remove()

        res.status(200).json({ message: 'Successfully unliked' })

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error' })
    }
})

// @ POST /api/likeDislike/upDislike
// @ Dislike
router.post('/upDislike', auth, async (req, res) => {
    try {
        let variable = {}

        if(req.body.postId){
            variable = { postId: req.body.postId, userId: req.user.userId }
        } else {
            variable = { commentId: req.body.commentId, userId: req.user.userId }
        }

        await Like.findOneAndDelete(variable)

        const dislike = new Dislike(variable)
        await dislike.save()

        res.status(201).json({ message: 'Successfully disliked it' })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error' })
    }
})

// @ POST /api/likeDislike/unDislike
// UnDislike
router.post('/unDislike', auth, async (req, res) => {
    try {
        let variable = {}

        if(req.body.postId){
            variable = { postId: req.body.postId, userId: req.user.userId }
        } else {
            variable = { commentId: req.body.commentId, userId: req.user.userId }
        }

        const dislike = await Dislike.findOne(variable)

        if(!dislike){
            return res.status(400).json({ message: 'Dislike Not Found' })
        }

        await dislike.remove()

        res.status(200).json({ message: 'Successfully undisliked' })
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error' })
    }
})

module.exports = router