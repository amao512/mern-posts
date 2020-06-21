const Router = require('express')
const router = Router()
const auth = require('../middleware/auth')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const config = require('config')
const crypto = require('crypto')
const mongoose = require('mongoose')
const Grid = require('gridfs-stream')

const UserPhoto = require('../models/UserPhoto')

// Create mongo connection
const conn = mongoose.createConnection(config.get('mongoUri'), { useNewUrlParser: true, useUnifiedTopology: true })

// Init gfs
let gfs

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo)
  gfs.collection('uploads')
})

// ------------------------------------------------------------------------ //
// Create storage engine
const storage = new GridFsStorage({
    url: config.get('mongoUri'),
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err)
                }
                
                const filename = file.originalname
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads',
                }
                resolve(fileInfo)
            })
        })
    },
})

const upload = multer({ storage })

// @route GET /api/files/
// @desc Loads form
router.get('/', async (req, res) => {
    try {
        const images = await UserPhoto.find().sort({ date: -1 })

        if(!images){
            return res.status(404).json({ message: 'Images Not Found' })
        }

        return res.json(images)
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

// @ POST /api/files/uploadImage
// Upload an image
router.post('/uploadImage', auth, upload.single('img'), async (req, res) => {
    try {
        let candidate = await UserPhoto.findOne({ owner: req.user.userId })
       
        if(candidate){
            candidate = await UserPhoto.findByIdAndUpdate(candidate._id, { $set: { 
                    filename: req.file.filename,
                    uploadId: req.file.id,
                    owner: req.user.userId
                }
            }, { new: true })
        } else {
            candidate = new UserPhoto({
                filename: req.file.filename,
                uploadId: req.file.id,
                owner: req.user.userId
            })
        }

    await candidate.save()
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: 'Server Error: Something is wrong!' })
    }
})

router.get('/:filename', (req, res) => {

    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Check if files
        if (!file || file.length === 0) {
            return res.status(404).json({ message: 'File Not Found' })
        }

        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        }
    })
})

// @route DELETE /files/:filename
// @desc  Delete file
router.delete('/delete/:id', auth, async (req, res) => {
    const photo = await UserPhoto.findOne({ uploadId: req.params.id })
    
    await photo.remove()

    gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
      if (err) {
        return res.status(404).json({ err: err })
      }
  
      res.json({ message: 'File deleted successfully' })
    })
})

module.exports = router