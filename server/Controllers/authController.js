const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

// define controller
const authController = {
    signUp: async (req, res) => {
        try {
            const {username, email, password} = req.body
            // chech user is already exists
            const isUserExists = await User.findOne({username, email})

            if(isUserExists){
                return res.json({Error: "User is Already Exists"})
            }
            // hash password
            const hashPass = await bcrypt.hash(password, 10);

            // create user

            const NewUser = new User({
                username,
                email,
                password: hashPass,
                Role: "User"
            })

            // save user
            const ReusltUser = await NewUser.save()

            if(ReusltUser) {
                return res.json({Status: "Success"})
            }
            else{
                return res.json({Error: "Internal Server ERROR"})
            }
            
        }
        catch (err){
            return res.json({Error: "Internal Server ERROR"})
        }
    }
}

module.exports = authController;