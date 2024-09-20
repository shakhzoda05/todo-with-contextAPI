import React, { useContext } from "react";
import { Context } from "../context/ToDoContext";

function List(){
const {todos}= useContext(Context)


    return(
        <div className="space-y-2 mt-5">
            {todos.map((item,index)=>(
                <div className="flex justify-between w-[450px] mt-3 space-x-1  bg-white/30 backdrop-blur-sm p-4 mx-auto rounded-md shadow-lg text-white" key={index}> 
                 <div className="flex items-center space-x-1">
                 <strong>{index+1}.</strong>
                 <h2>{item.title}</h2>
                 </div>
                  <div className="space-x-2">
                  <button className="shadow-md hover:shadow-lg duration-300 p-2 w-[80px] bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-red-500 focus:text-white focus:bg-red-500 hover:border-red-500 hover:text-red-500">Delete</button>
                  <button className="shadow-md hover:shadow-lg duration-300 p-2 w-[80px] bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-blue-500 focus:text-white focus:bg-blue-500 hover:border-blue-500 hover:text-blue-500">Update</button>
                  </div>
                </div>
            ))}
        </div>
    )
}

export default List