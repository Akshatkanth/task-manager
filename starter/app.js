const express = require('express');
const app = express();
const routes = require('./routes/tasks')


//routes          //(req, res) is a call back function
app.get('/hello', (req, res)=>{
    res.send('task manager app!')
})

app.use('/api/v1/tasks', tasks)

const port = 3000 //hardcoding rn

app.listen(port, console.log(`Server is listening on port ${port}...`))