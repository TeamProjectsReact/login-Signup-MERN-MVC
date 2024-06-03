const Employee = require('../Models/Employee')

const EmployeeController = {
    AddNewData: async (req, res) => {
        const { dataUser } = req.body

        // save data
        const NewData = new Employee({ content: dataUser })

        if(NewData){
            return res.json({Status: "Success"})
        }
        else{
            return res.json({Error: "Internal Server Error"})
        }
    }
}

module.exports = EmployeeController