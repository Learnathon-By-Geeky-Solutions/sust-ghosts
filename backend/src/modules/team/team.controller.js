const express = require('express')
const router = express.Router()
const { createTeam, updateTeam, deleteTeam } = require('./team.service')
const { searchTeamByWorkspaceAndTeamName } = require('./team.service');

router.post('/', createTeam)
router.put('/:id', updateTeam) 
router.delete('/:id', deleteTeam)


router.get('/search-by-name', searchTeamByWorkspaceAndTeamName);

module.exports = router;