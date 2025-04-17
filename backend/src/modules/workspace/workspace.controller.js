const express = require('express')
const router = express.Router()
const { createWorkspace, addMemberInWorkspace, deleteWorkspace } = require('./workspace.service')

router.post('/', createWorkspace)
router.put('/add', addMemberInWorkspace)
// router.put('/remove',removeMemberInWorkspace)
router.delete('/', deleteWorkspace)

module.exports = router