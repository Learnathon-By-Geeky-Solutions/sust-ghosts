const mongoose = require('mongoose');

const workspaceSchema = mongoose.Schema({
    workspaceOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true  
    },
    workspaceName: {
        type: String,
        require: true
    },
    workspaceMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true  
        }
    ],
    teamId:[ 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team',
        }
    ]   
})
module.exports = workspaceSchema