export function Todos({todos}){
    console.log(todos)
    return(<>{todos.map(function(todo){
        return (<div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2><br />
            <button onClick={function(){}}>{todo.completed==true?"completed":"Mark as completed"}</button>
            <hr />
        </div>)
    })}</>)
    
}
