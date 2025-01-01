const express = require('express');
const app = express();
app.use(express.json());
const types = require('./types'); // Assuming you have a valid 'types' module
const { todo } = require('./db');
const zod=require('zod')
const cors=require('cors')
app.use(cors())

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/todo",async function (req,res){

    const createpayload=req.body
    const parsed=types.create.safeParse(createpayload)

    if(!parsed.success){
        res.status(411).json({
            msg:"wrong schema inputs"
        })
        return
    }
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })
})

app.get("/todos",async function (req,res){
    const todos=await todo.find({})
    res.json({todos})
})

app.put("/completed",async function (req,res){

    const createpayload=req.body
    const parsed=types.create.safeParse(createpayload)

    if(!parsed.success()){
        res.status(411).json({
            msg:"wrong schema inputs"
        })
        return
    }

    await todo.update({
        _id:req.body.id
    },{completed:true})
    
    res.status(201).json({
        msg:"todo updated"
    })
})