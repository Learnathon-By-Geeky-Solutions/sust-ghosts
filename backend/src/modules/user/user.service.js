// core business logic define
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const userSchema = require('./user.model')
const User = new mongoose.model('User',userSchema);
const {newUserCreation, findUser} = require('./user.repository')
const signup = async(req,res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const userData = {
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashedPassword,
            workspacename: req.body.workspacename
        };
        console.log(userData)
        // repository 
        newUserCreation(userData)
        // const newUser = new User(userData);
        // await newUser.save();
        res.status(200).json({
            message: 'successfull'
        })
    } catch{
        res.status(500).json({
            error: 'serverside error'
        })
    }
}
const login = async(req,res) => {
    try{
        const user = await findUser(req.body.email);
        console.log(" = ", user)
        if(user && user.length>0){
            const isValidePassword = await bcrypt.compare(req.body.password,user[0].password)
            
            if(isValidePassword){
                // console.log(process.env.JWT_SECRET)
                // generate token
                const token = jwt.sign({
                    fullname: user[0].fullname,
                    id: user[0]._id
                }, "sfdjlajdlkfasjdfskljfjksjdfljskdf", // process.env.JWT_SECRET is not working 
                {
                    expiresIn: '1h'
                });
                console.log(token)
                res.status(200).json({
                    "access_token": token,
                    "message": 'login successful',
                    "user": user
                })
            } else {
                res.status(401).json({
                    "error": 'Authentication failed'
                })
            }
        } else {
            res.status(401).json({
                "error": 'Authentication failed'
            })
        }
    } catch(err){
        console.log(err);
        res.status(500).json({
            "error": 'Authentication failed'
        })
    }
}
module.exports = {signup,login}