const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const userHandler = require('./modules/user/user.controller');
const taskHandler = require('./modules/task/task.controller');
const reminderHandler = require('./modules/reminder/reminder.controller');
const projectHandler = require('./modules/project/project.controller')
const app = express();


dotenv.config()

app.use(express.json());
app.use('/task',taskHandler)
app.use('/user',userHandler)
app.use('/reminder',reminderHandler);
app.use('/project',projectHandler)
// database connection
mongoose.connect('mongodb+srv://sustghost:12345@catalyst.qzbmo.mongodb.net/?retryWrites=true&w=majority&appName=Catalyst')
    .then(() => console.log('connection successful'))
    .catch((err) => console.log(err))


app.post('/login', async (req, res) => {
    res.send('how are you')
})
app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('Server is running in port: 3000');
});