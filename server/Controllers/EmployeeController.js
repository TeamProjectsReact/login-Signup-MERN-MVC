const Employee = require('../Models/Employee')

const EmployeeController = {
    AddNewData: async (req, res) => {
        const { dataUser } = req.body

        // save data
        const NewData = new Employee({ content: dataUser })
        const SaveData = await NewData.save();
        
        if(SaveData){
            return res.json({Status: "Success"})
        }
        else{
            return res.json({Error: "Internal Server Error"})
        }
    }
}

module.exports = EmployeeController