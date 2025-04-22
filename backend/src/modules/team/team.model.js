const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    teamManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true  
    },
    workspaceOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    workspace: {
        type : mongoose.Schema.Types.ObjectId, //mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        // required: true
    },

    teamName: {
        type: String,
        required: true
    },
    projectList: [{
        type: mongoose.Schema.Types.ObjectId,//mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    members: [{
        type: mongoose.Schema.Types.ObjectId,// mongoose.Schema.Types.ObjectId,
        ref: 'User'
        
    }]
});

module.exports = teamSchema;

