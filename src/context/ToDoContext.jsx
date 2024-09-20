import { createContext, useState } from "react";

export const Context = createContext()

export const TodoContext=({children})=>{
const [todos, setTodos] = useState([])

function addTodos(body){
    setTodos([...todos, body])
}


return(
    <Context.Provider value={{todos,setTodos,addTodos}}>{children}</Context.Provider>
)
}