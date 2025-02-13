const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const router = express.Router();
const userSchema = require('./userModel')
const User = new mongoose.model('User',userSchema);


router.post('/signup', async(req,res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const newUser = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashedPassword,
            workspacename: req.body.workspacename
        });
        await newUser.save();
        res.status(200).json({
            message: 'successfull'
        })
    } catch{
        res.status(500).json({
            error: 'serverside error'
        })
    }
});

router.post('/login', async(req,res) => {
    try{
        const user = await User.find({email: req.body.email});
        console.log(user)
        if(user && user.length>0){
            const isValidePassword = await bcrypt.compare(req.body.password,user[0].password)
            
            if(isValidePassword){
                console.log(process.env.JWT_SECRET)
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
                    "message": 'login successful'
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
})


module.exports = router