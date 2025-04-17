const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    teamManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true  
    },
    workspace: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        required: true
    },
    
    teamName: {
        type: String,
        required: true
    },
    projectList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

