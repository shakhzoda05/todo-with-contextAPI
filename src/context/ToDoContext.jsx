import { createContext, useState } from "react";

export const Context = createContext()

export const TodoContext=({children})=>{
const [todos, setTodos] = useState([])

function addTodos(body){
    setTodos([...todos, body])
}

function deleteTodos(id){
    const deleteIndex=todos.findIndex(item=>item.id==id)
    todos.splice(deleteIndex,1)
    setTodos([...todos])
}

function updateTodos(id,newValue){
    const findedData=todos.find(item=>item.id==id)
    findedData.title=newValue
    setTodos([...todos])
}

return(
    <Context.Provider value={{todos,addTodos,deleteTodos,updateTodos}}>{children}</Context.Provider>
)
}