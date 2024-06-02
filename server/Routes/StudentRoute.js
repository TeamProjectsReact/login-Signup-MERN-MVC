const express = require('express')
const multer = require('multer');
const path = require('path');
const StudentController = require('../Controllers/StudentController')

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
 });

 const upload = multer({ storage });

 router.post('/AddStudent', upload.single('image'), StudentController.AddStudent)

module.exports = router