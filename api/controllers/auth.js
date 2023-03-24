const User = require('../models/Auth');
const bcrypt = require('bcrypt')

//Register
const Register = async (req, res) => {

    try {
        const salt = bcrypt.genSalt(10)
        const hash = bcrypt.hash(req.body.password, salt)

        const user = await new User({
            username: req.body.username,
            password: hash
        })
        await user.save()
        return res.status(201).json({msg: 'Admin register successful'})
    } catch (error) {
        return res.status(500).json(error)
    }

}


//Login
const Login = async (req, res) => {

    try {
        const user = User.findOne({username: req.body.username});
        if(!user){
            return res.status(401).json('User does not exist')
        }

        const vPassword = bcrypt.compare(req.body.password, user.password)
        !vPassword && res.status(401).json({msg: 'Please enter a correct password'})

        const {password, ...other} = user._doc
        return res.status(200).json(other)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { Register, Login }