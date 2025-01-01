const mongoose=require('mongoose')
const { string } = require('zod')

mongoose.connect('mongodb://localhost:27017/todo-revise')
.then(() => console.log('Connected to MongoDB...'))

const todoscmeha=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoscmeha)

module.exports={
    todo
}