const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String, 
        require: true    
    },
    email: {
        type: String,
        require: true
    },
    workspacename: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})
module.exports = userSchema