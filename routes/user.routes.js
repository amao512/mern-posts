const Router = require('express')
const router = Router()
const auth = require('../middleware/auth')

const User = require('../models/User')

// GET /api/user
// Get all users

router.get('/', async (req, res) => {
    try {
        let users = await User.find().select('-password')


        res.json(users)
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})


// GET /api/user/:id
// Get user by id

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password')

        if(!user) {
            return res.status(404).json({ message: 'User Not Found' })
        }

        res.json({ user })

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

module.exports = router