const express = require('express')
const authController = require('../Controllers/authController')

const router = express.Router();

router.post('/signUp', authController.signUp)

module.exports = router