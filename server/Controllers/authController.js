const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

// define controller
const authController = {
    signUp: async (req, res) => {
        try {
            const {username, email, password} = req.body
            // console.log(req.body)
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
    },

    SignIN: async (req, res) => {
        const {email, password} = req.body;

        // check user enter data in database
        const checkuser = await User.findOne({ email });

        if(!checkuser) {
            return res.json({Error: "No data Found...."})
        }

        // check the password
        const passMatch = await bcrypt.compare(password, checkuser.password);

        if(!passMatch) {
            return res.json({Error: "Password Not Match"})
        }
        else{
            // create a token for login
            const token = jwt.sign({ userId: checkuser._id, userEmail: checkuser.email, userRole: checkuser.Role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            
            return res.json({Status: "Success", Token:token, Result: checkuser})            
        }
     
    }
}

module.exports = authController;