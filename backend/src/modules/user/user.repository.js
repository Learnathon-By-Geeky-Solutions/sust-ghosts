// database query
const mongoose = require('mongoose')
const userSchema = require('./user.model')
const User = new mongoose.model('User',userSchema);
const {createWorkspace} = require('../workspace/workspace.service');

const newUserCreation = async(userData) => {
    const newUser = new User(userData);
    await newUser.save();
    console.log("user Data = ",userData, " newUser = " , newUser);
    const workspace = {
        workspaceOwner: newUser.email,
        workspaceName: newUser.workspacename
    }
    console.log("workspace in user = ", workspace)
    await createWorkspace(workspace);
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
module.exports = {newUserCreation, findUser}