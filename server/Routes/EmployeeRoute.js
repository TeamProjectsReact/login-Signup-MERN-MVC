const express = require('express')
const EmployeeController = require('../Controllers/EmployeeController')


const router = express.Router()

router.post('/AddTest', EmployeeController.AddNewData)
router.get('/GetTest', EmployeeController.GetInfoData)

module.exports = router;
