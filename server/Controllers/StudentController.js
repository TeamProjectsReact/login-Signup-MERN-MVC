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

    AddStudent: async (req, res) => {
        const { RegID, NIC, fname, lname } = req.body
        const { image } = req.file;
        const imagePath = path.join(__dirname, '..', 'uploads', filename);

        const std = new Student({
            RegID,
            NIC,
            fname,
            lname,
            image,
            path: imagePath
        })

        const stdResult = await std.save();

        if(ReusltUser) {
            return res.json({Status: "Success"})
        }
        else{
            return res.json({Error: "Internal Server ERROR"})
        }
    },
}

module.exports = StudentController