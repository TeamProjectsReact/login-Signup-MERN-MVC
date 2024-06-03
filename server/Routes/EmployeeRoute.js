const express = require('express')
const EmployeeController = require('../Controllers/EmployeeController')


const router = express.Router()

router.post('/AddTest', EmployeeController.AddNewData)

module.exports = router;
