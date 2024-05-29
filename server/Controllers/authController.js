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
        }
        catch {

        }
    }
}