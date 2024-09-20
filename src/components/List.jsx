import React, { useContext, useState } from "react";
import { Context } from "../context/ToDoContext";
import Modal from "./Modal";

function List(){
const {todos,deleteTodos,updateTodos}= useContext(Context)
const [showModal,setShowModal]=useState(false)
const [updateValue,setUpdateValue]=useState("")
const [updateId,setUpdateId]=useState(null)

const handleUpdateBtnClick=(e)=>{
    setShowModal(true)
    setUpdateId(e.target.id)
    const findedData=todos.find(item=>item.id==e.target.id)
    setUpdateValue(findedData.title)

}
function handleUpdateSubmit(e){
    e.preventDefault()
    updateTodos(updateId,updateValue)
    setShowModal(false)

}

    return(
        <div className="space-y-2 mt-5">
            {todos.map((item,index)=>(
                <div className="flex justify-between w-[450px] mt-3 space-x-1  bg-white/30 backdrop-blur-sm p-4 mx-auto rounded-md shadow-lg text-white" key={index}> 
                 <div className="flex items-center space-x-1">
                 <strong>{index+1}.</strong>
                 <h2>{item.title}</h2>  
                 </div>
                  <div className="space-x-2">
                  <button id={item.id} onClick={handleUpdateBtnClick} className="shadow-md hover:shadow-lg duration-300 p-2 w-[80px] bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-blue-500 focus:text-white focus:bg-blue-500 hover:border-blue-500 hover:text-blue-500">Update</button>
                  <button onClick={()=>deleteTodos(item.id)} className="shadow-md hover:shadow-lg duration-300 p-2 w-[80px] bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-red-500 focus:text-white focus:bg-red-500 hover:border-red-500 hover:text-red-500">Delete</button>
                  </div>
                </div>
            ))}
            <Modal showModal={showModal} setShowModal={setShowModal}>
               <form onSubmit={handleUpdateSubmit} className="w-[400px] mx-auto mt-5 space-x-3 p-6 rounded-md">
                 <input onChange={(e)=> setUpdateValue(e.target.value)} value={updateValue} className="shadow-md  hover:shadow-lg border-2 duration-300 rounded-lg focus:border-white outline-none p-2 bg-transparent w-[70%] border-white placeholder-white text-white hover:scale-105" type="text" placeholder="Update your Todo" />
                  <button className="shadow-md hover:shadow-lg duration-300 p-2 bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-red-500 outline-none hover:scale-105 focus:text-red-500">Update</button>
               </form>
            </Modal>
        </div>
    )
}

export default List