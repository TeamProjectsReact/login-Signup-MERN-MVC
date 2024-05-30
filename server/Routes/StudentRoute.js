const express = require('express')
const StudentController = require('../Controllers/StudentController')

const router = express.Router()

router.post('/AddStudent', StudentController.AddStudent)

module.exports = router