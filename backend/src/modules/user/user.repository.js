// database query
const mongoose = require('mongoose')
const userSchema = require('./user.model')
const User = new mongoose.model('User',userSchema);

const findUserByMail = async (email) => {
    const user = await User.find({ email: email });
    return user
};
const newUserCreation = async(userData) => {
    const newUser = new User(userData);
    await newUser.save();
}
const findUser = async(email)=>{
    try{
        const user = await User.find({email: email})
        return user
    }
    catch(error){
        console.log('there are an error in server end')
    }
}
module.exports = {newUserCreation, findUser, findUserByMail}