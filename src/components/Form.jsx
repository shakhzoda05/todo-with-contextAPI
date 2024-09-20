import React, { useContext } from "react";
import { Context } from "../context/ToDoContext";
import { useRef } from 'react';


function Form(){
    const {addTodos,todos}=useContext(Context)
    const inputRef=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data ={
            id:todos.length+1,
            title:inputRef.current.value
        }
        addTodos(data)
        e.target.reset()

    }
    return(
        <>
        <form onSubmit={handleSubmit} className="w-[450px] mx-auto mt-10 space-x-4 bg-white/30 backdrop-blur-sm p-6 rounded-md shadow-lg">
            <input ref={inputRef} className="shadow-md hover:shadow-lg border-2 duration-300 rounded-lg focus:border-white outline-none p-2 bg-transparent w-[80%] border-white placeholder-white text-white hover:scale-105" type="text" placeholder="Add yor Todo..." />
            <button className="shadow-md hover:shadow-lg duration-300 p-2 w-[60px] bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-white outline-none hover:scale-105">Add</button>
        </form>
        <div className="px-9 w-[450px] mx-auto mt-5 space-x-6 bg-white/30 backdrop-blur-sm p-6 rounded-md shadow-lg">
        <button className="shadow-md hover:shadow-lg duration-300 p-2 w-[60px] bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-white outline-none hover:scale-105">All(0)</button>
        <button className="shadow-md hover:shadow-lg duration-300 p-2 bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-white outline-none hover:scale-105">Complated(0)</button>
        <button className="shadow-md hover:shadow-lg duration-300 p-2 bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-white outline-none hover:scale-105">UnComplated(0)</button>
        </div>
        </>
    )
}

export default Form