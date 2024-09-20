import React from "react";

function Modal({children, setShowModal, showModal}) {
    return(
        <div onClick={(e)=> e.target.id=="wrapper" ? setShowModal(false):setShowModal(true)} id="wrapper" className={`fixed top-0 left-0 right-0 bottom-0 bg-black/10 backdrop-blur-lg duration-700 ${showModal ? "" : "scale-0"}`}>
                 <div className="absolute mx-auto mt-36 top-0 left-0 right-0 bottom-0 w-[450px] h-[250px] bg-green-200 rounded-lg p-3">{children}</div>
        </div>
    )
}
export default Modal