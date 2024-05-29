// const express = require('express')
// const authController = require('../Controllers/authController')

// const router = express.Router();

// router.post('/Register', authController.signUp);

// module.exports = router;

const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Register Route
router.post('/Register', authController.signUp);

// Login Route
// router.post('/login', authController.login);

module.exports = router;