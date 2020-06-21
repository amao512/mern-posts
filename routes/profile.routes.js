const Router = require('express')
const router = Router()
const auth = require('../middleware/auth')

const User = require('../models/User')

// @ GET /api/profile
// Get profile data

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password')

        res.json(user)
    } catch (e){
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

module.exports = router