const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
    imageUrl: {
        type: String,
        required: true,
    },
})

const Students = mongoose.model('Students', StudentSchema)

module.exports = Students