const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee