const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    
})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee