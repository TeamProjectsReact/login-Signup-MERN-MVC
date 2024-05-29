const multer = require('multer')
const path = require('path')
const Student = require('../Models/Student')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
});

const upload = multer({ storage }).single('image');


const StudentController = {

    AddStundet: async (req, res) => {
        const { filename } = req.file;
        const imagePath = path.join(__dirname, '..', 'uploads', filename);

        
    },
}

module.exports = StudentController