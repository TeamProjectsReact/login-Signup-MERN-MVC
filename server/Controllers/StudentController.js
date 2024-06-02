const Students = require('../Models/Student')
const path = require('path')

const StudentController = {
    AddStudent: async (req, res) => {
        const { title } = req.body;
        const imageUrl = req.file.path;

        const newImage = new Students({
            title,
            imageUrl,
        });

        await newImage.save();

        return res.json({Status: "Success"})
        
    }
}