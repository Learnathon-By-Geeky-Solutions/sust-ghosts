const mongoose = require('mongoose');
// const projectSchema = require('../project/project.model'); 
const teamSchema = require('./team.model');
const Team = mongoose.model('Team',teamSchema);
const userSchema = require('../user/user.model')
const User = mongoose.model('User',userSchema);
const {addTeamInWorkspace} = require('../workspace/workspace.service');


const createNewTeam = async (Data) => {
    const team = new Team(Data);
    const newTeam = await team.save();
    console.log(newTeam);
    await addTeamInWorkspace(newTeam.workspaceOwner,newTeam._id)
    return newTeam;
};

const teamUpdate = async(id, body) => {
    return await Team.findByIdAndUpdate(id, body, { new: true });
}

const teamDelete = async(id) => {
    return await Team.findByIdAndDelete(id)
}

const findTeamByWorkspaceAndTeamName = async (workspaceName, teamName) => {
    return await Team.find({
        workspace: workspace,
        teamName: teamName,
    });
};




const isUserInTeam = async (teamId, userId) => {
    try {
        const team = await Team.findOne({
            _id: teamId,
            members: userId
        });
        
        return !!team; // Returns true if team is found, false otherwise
    } catch (error) {
        throw error;
    }
};

// Add to your existing exports
module.exports = { 
    createNewTeam, 
    teamUpdate, 
    teamDelete,
    isUserInTeam 
};