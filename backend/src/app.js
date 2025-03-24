const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const userHandler = require('./modules/user/user.controller');
const taskHandler = require('./modules/task/task.controller')
const app = express();

dotenv.config()
app.use(cors({
    origin: 'http://localhost:5173', // Allow frontend URL
    credentials: true, // If sending cookies or authentication
  }));
app.use(express.json());
app.use('/task',taskHandler)
app.use('/user',userHandler)

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