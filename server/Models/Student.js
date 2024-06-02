const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({

})

const Students = mongoose.model('Students', StudentSchema)

module.exports = Students