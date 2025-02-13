const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const userHandler = require('./modules/users/userHandler');

const app = express();

dotenv.config()

app.use(express.json());
app.use('/user',userHandler)

// database connection
mongoose.connect('mongodb+srv://sustghost:12345@catalyst.qzbmo.mongodb.net/?retryWrites=true&w=majority&appName=Catalyst')
    .then(() => console.log('connection successful'))
    .catch((err) => console.log(err))


app.post('/login', async (req, res) => {

})
app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('Server is running in port: 3000');
});