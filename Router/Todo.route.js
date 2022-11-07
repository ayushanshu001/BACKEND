const express = require("express");

const TodoRoute=express.Router()

const {TodoModel}=require('../Models/Todo.model')

TodoRoute.post("/create", async (req, res) => {
    const {taskname,status,tag } = req.body;

    const TodoStatus = new NoteModel({taskname,status,tag,user_ID})
    await TodoStatus.save()
    return res.send({message:'Todo Created',Todo: TodoStatus })
})

TodoRoute.get("/", async (req, res) => {
    const {user_ID } = req.body;
    const Todo = await TodoModel.find({user_ID});
    return res.send(Todo)
  })


  TodoRoute.patch("/:todoId/edit", async (req, res) => {
    const todoId = req.params.todoId
    const userId = req.body.user_ID
    console.log("user_ID:",user_ID)
  
    const todo = await TodoModel.findOne({ _id: todoId });
    if (todo.user_ID === user_ID) {
      const updated_todo = await TodoModel.findOneAndUpdate(
        { _id: todoId },
        req.body,
        { new: true }
      )
      return res.send({message:'Updated Successfully',note: updated_todo})
    } else {
      return res.send('Authorized')
    }
  })

  TodoRoute.delete("/:todoId/delete", async (req, res) => {
    const todoId = req.params.todoId;
    const user_ID = req.body.user_ID;
    const todo = await TodoModel.findOne({ _id: noteId })
    if (todo.user_ID === user_ID) {
      const deleted_todo = await NoteModel.findOneAndDelete(
        { _id: todoId },
        { new: true }
      );
      return res.send({ message: "Successfully updated", todo: deleted_todo });
    } else {
      return res.send('Not Authorized')
    }
  })

  module.exports={
    TodoRoute
  }


