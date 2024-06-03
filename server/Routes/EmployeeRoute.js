const express = require('express')
const EmployeeController = require('../Controllers/EmployeeController')


const router = express.Router()

router.get('/AddTest', EmployeeController.AddNewData)

module.exports = router;
