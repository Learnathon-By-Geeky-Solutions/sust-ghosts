const mongoose = require('mongoose');
// const projectSchema = require('../project/project.model'); 
const teamSchema = require('./team.model');
const Team = mongoose.model('Team',teamSchema);
const userSchema = require('../user/user.model')
const User = mongoose.model('User',userSchema);


const createNewTeam = async (Data) => {
    const team = new Team(Data);
    return await team.save();
};

const teamUpdate = async(id, body) => {
    return await Team.findByIdAndUpdate(id, body, { new: true });
}

const teamDelete = async(id) => {
    return await Team.findByIdAndDelete(id)
}

const findTeamByWorkspaceAndTeamName = async (workspaceName, teamName) => {
    return await Team.find({
        workspace: workspaceName,
        teamName: teamName,
    });
};




module.exports = { createNewTeam, teamUpdate, teamDelete, findTeamByManagerAndWorkspace, findTeamByWorkspaceAndTeamName };