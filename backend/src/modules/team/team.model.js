const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    teamManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true  
    },
    workspace: {
        type : String, //mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        // required: true
    },

    teamName: {
        type: String,
        required: true
    },
    projectList: [{
        type: String,//mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    members: [{
        type: String,// mongoose.Schema.Types.ObjectId,
        ref: 'User'
        
    }]
});

module.exports = teamSchema;

