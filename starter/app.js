const express = require('express');
const app = express();



//routes          //(req, res) is a call back function
app.get('/hello', (req, res)=>{
    res.send('task manager app!')
})

const port = 3000 //hardcoding rn

app.listen(port, console.log(`Server is listening on port ${port}...`))