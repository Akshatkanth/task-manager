const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxLength:[20, 'name cannot more than 20 characters']
    }, 
        completed:Boolean
})

module.exports = mongoose.model('Task', TaskSchema)
