const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    projectManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true  
    },
    projectName: {
        type: String,
        require: true
    },
    projectDescription: {
        type: String
    },
    endDate: {
        type: Date,
        require: true
    },
    startDate: {
        type: Date,
        require: true
    },
    // teamId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Team',
    //     require: true 
    // }
})
module.exports = projectSchema