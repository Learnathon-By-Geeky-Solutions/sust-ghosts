const express = require('express');
const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {

})
app.post('/login', async (req, res) => {

})

app.listen(3000, () => {
    console.log('Server is running in port: 3000');
});