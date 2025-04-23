const express = require('express')
const router = express.Router()
const { 
    createProject, 
    updateProject, 
    deleteProject,
    getTeamIdByProjectId 
} = require('./project.service')


router.post('/', createProject)
router.put('/', updateProject)
router.delete('/', deleteProject)

router.post('/team', getTeamIdByProjectId)


module.exports = router