const express = require('express')
const StudentController = require('../Controllers/StudentController')

const router = express.Router()

router.post('/AddStudent', StudentController.StudentNew)


module.exports = router