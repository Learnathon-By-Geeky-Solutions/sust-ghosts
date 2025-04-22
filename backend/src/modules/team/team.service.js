const { createNewTeam , teamUpdate, teamDelete} = require('./team.repository');
const { findUserByMail } = require('../user/user.utility')
const { findWorkspaceByOwner } = require('../workspace/workspace.repository');
const { findTeamByWorkspaceAndTeamName } = require('./team.repository');

const createTeam = async (req, res) => {
    try {
        const { teamManager, workspaceOwner,teamName,members } = req.body;
        console.log(req.body);
        // Find user by their full name
        const teamManagers = await findUserByMail(teamManager);
        const manager = teamManagers[0];
        const workspaceOwners = await findUserByMail(workspaceOwner);
        const owner = workspaceOwners[0]; 
        console.log(manager, owner);
        if (!manager|| !owner) {
            return res.status(404).json({ error: 'User not found' });
        }

        membersId = [];
        for (let i = 0; i < members.length; i++) {
            console.log(members[i]);
            const users = await findUserByMail(members[i]); // Use each member's email or identifier
            const user = users[0]; // Assuming findUserByMail returns an array of users
            if (user) {
                membersId.push(user._id); // Push the user's ID to the array
            }
        }
        console.log(membersId);
        const teamData = {
            teamManager: manager._id,
            workspaceOwner: owner._id,
            teamName, 
            members : membersId, // Use the array of user IDs
        };

        const newTeam = await createNewTeam(teamData);
        res.status(201).json({ message: 'Team created successfully', Team: newTeam });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


const updateTeam = async(req, res)=>{
    try {
        const updatedTeam = await teamUpdate(req.params.id, req.body);
        if (!updatedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.json(updatedTeam);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;  // Extract task ID from URL

        const deletedTeam = await teamDelete(id);

        if (!deletedTeam) {
            return res.status(404).json({ error: 'Team not found' });
        }

        res.status(200).json({ message: 'Team deleted successfully', team: deletedTeam });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const searchTeamByWorkspaceAndTeamName = async (req, res) => {
    try {
        const { workspaceName, teamName } = req.query;

        if (!workspaceName || !teamName) {
            return res.status(400).json({ error: 'Workspace name and team name are required' });
        }

        const teams = await findTeamByWorkspaceAndTeamName(workspaceName, teamName);

        if (teams.length === 0) {
            return res.status(404).json({ message: 'No teams found' });
        }

        res.status(200).json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createTeam, updateTeam, deleteTeam,  searchTeamByWorkspaceAndTeamName };