const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = async (req, res, next) => {
    if(req.method === 'OPTIONS'){
        return next()
    }

    try {
        const token = await req.headers['auth-token']

        const decoded = jwt.verify(token, config.get('jwtSecret'))

        req.user = decoded
        
        next()
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Invalid token! Access denied!' })
    }
} 