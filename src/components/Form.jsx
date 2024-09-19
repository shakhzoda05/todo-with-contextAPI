import React from "react";

function Form(){
    return(
        <form className="w-[450px] mx-auto mt-5 space-x-4 bg-white/30 backdrop-blur-sm p-6 rounded-md shadow-lg">
            <input className="shadow-md hover:shadow-lg border-2 duration-300 rounded-lg focus:border-white outline-none p-2 bg-transparent w-[80%] border-white placeholder-white text-white hover:scale-105" type="text" placeholder="Add yor Todo..." />
            <button className="shadow-md hover:shadow-lg duration-300 p-2 bg-transparent text-white font-semibold  border-white border-[2px] rounded-lg focus:border-white outline-none hover:scale-105">Add</button>
        </form>
    )
}

export default Form