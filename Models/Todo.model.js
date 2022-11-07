const mongoose = require("mongoose");


const TodoSchema=mongoose.Schema({
    taskname:{type:String,required:true},
    status:{type:String,required:true},
    tag:{type:String,required:true}
})


const TodoModel=mongoose.model('Todo',TodoSchema)



module.exports={
    TodoModel
}