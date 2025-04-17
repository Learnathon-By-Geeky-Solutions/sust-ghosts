const { createNewTeam , teamUpdate, teamDelete} = require('./team.repository');
const { findUserByMail } = require('../user/user.repository')
const createTeam = async (req, res) => {
    try {
        const { teamManager, teamName, projectList,members,workspace } = req.body;

        // Find user by their full name
        const users = await findUserByMail(teamManager);
        const user = users[0];
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }



        const teamData = {
            teamManager: user._id,
            workspace,
            teamName, 
            projectList, 
            members
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
module.exports = { createTeam, updateTeam, deleteTeam };
