import { useState } from "react";

export function Createtodo(){
    const [title,setTitle] = useState("");
    const [description,setdescription]=useState("")
    return(<>
    <input type="text" name="" placeholder="title" id="" onChange={function(e){
        setTitle(e.target.value)}}  /><br />
    <input type="text" name="" placeholder="description" id="" onChange={function(f){
        setdescription(f.target.value)}} /><br /> 

    <button onClick={()=>{
        fetch("http://localhost:3000/todo",{
            method:"POST",
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
             "Content-type":"application/json"
            }
        }).then(async function(res){
            const json=await res.json()
            alert("todo added")
        })
    }}> add todo</button>

    </>)
}