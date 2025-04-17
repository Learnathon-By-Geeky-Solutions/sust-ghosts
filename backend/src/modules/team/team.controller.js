const express = require('express')
const router = express.Router()
const { createTeam, updateTeam, deleteTeam } = require('./team.service')

router.post('/', createTeam)
router.put('/', updateTeam)
router.delete('/', deleteTeam)

module.exports = router