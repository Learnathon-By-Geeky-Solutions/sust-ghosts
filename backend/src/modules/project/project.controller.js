const express = require('express')
const router = express.Router()
const { createProject, updateProject, deleteProject } = require('./project.service')

router.post('/', createProject)
router.put('/', updateProject)
router.delete('/', deleteProject)

module.exports = router