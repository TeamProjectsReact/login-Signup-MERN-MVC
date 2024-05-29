const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    RegID: {
        type: String,
        require: true,
        unique: true
    },
    NIC: {
        type: String,
        require: true,
        unique: true
    },
    Fname: {
        type: String,
        require: true,
    },
    Lname: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Student = new mongoose.model('Student', studentSchema)

module.exports = Student