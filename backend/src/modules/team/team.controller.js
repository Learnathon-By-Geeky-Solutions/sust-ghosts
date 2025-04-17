const express = require('express')
const router = express.Router()
const { createTeam, updateTeam, deleteTeam } = require('./team.service')

router.post('/', createTeam)
router.put('/:id', updateTeam) 
router.delete('/:id', deleteTeam) 

module.exports = router