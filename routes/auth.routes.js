const Router = require('express')
const router = Router()
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const auth = require('../middleware/auth')

const User = require('../models/User')

// @ POST /api/auth/register
// Register user

router.post('/register', [
    check('name', 'Please type the name').notEmpty(),
    check('lastName', 'Please type the last name').notEmpty(),
    check('email', 'Please type the valid email').isEmail(),
    check('password', 'Password must be more than 6 character').isLength({ min: 6 })
], async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({ error: errors.array(), message: 'Input Errors' })
        }

        const { name, lastName, email, password } = req.body

        const candidate = await User.findOne({ email })

        if(candidate){
            return res.status(400).json({ message: 'Email is already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({ name, lastName, email, password: hashedPassword })

        await user.save()

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 }
        )

        res.status(200).json({ token, userId: user.id })

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ POST /api/auth/login
// Login to system

router.post('/login', [
    check('email', 'Please type the valid email').isEmail(),
    check('password', 'Please type the valid password').exists()
], async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({ error: errors.array(), message: 'Input Errors' })
        }

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({ message: 'User does not exists' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({ message: 'Invalid password' })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 }
        )

        res.status(200).json({ token, userId: user.id })

    } catch (e){
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ GET /api/auth
// Get user-admin data

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