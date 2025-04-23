const express = require('express')
const router = express.Router()
const { createTask, updateTask, deleteTask } = require('./task.service')

// router.post('/create',async(req, res)=>{
//     console.log('hello, I am here')
// })
router.get('/create',async(req, res) => {
    console.log('how')
    res.send('hello')
})
router.get('/',(req, res) => {
    res.send('hiii')
})
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)


router.post('/project', getTasksByProjectId)
router.post('/assignee', getTasksByAssignee)
router.post('/assigned-by', getTasksByAssignedBy)

module.exports = router