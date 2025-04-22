const express = require('express')
const router = express.Router()
const { addMemberInWorkspace, deleteWorkspace,addTeamInWorkspace } = require('./workspace.service')

// router.post('/', createWorkspace)
router.put('/add', addMemberInWorkspace)
// router.put('/remove',removeMemberInWorkspace)
router.delete('/', deleteWorkspace)
// router.post('/addTeam',addTeamInWorkspace);

module.exports = router