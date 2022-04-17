import {MdAddCircle,MdOutlineClose} from "react-icons/md";
import { useGlobalContext } from "../context/global-context";
import { useState,useRef } from "react";
export const LabelModal=()=>{
    const{labelModal,toogleLabelModal}=useGlobalContext();

    const [label,setLabel]=useState([]);
    const inputvalue=useRef(null);

   const addLabel=()=>{
       setLabel([...label,inputvalue.current.value]);
       inputvalue.current.value="";
   }
    return (
        <div className={`${labelModal?'fixed':'hidden'} w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-modal-rgba`}>
         <div className="modal-body min-w-[15rem] min-h-auto relative bg-[#f5f3ff] p-2 ">
         <div className="flex justify-end mb-3">
         <MdOutlineClose size={21} className="fill-gray-600" onClick={toogleLabelModal}/>
        </div>    
        <div className="flex items-center"> 
         <input placeholder="Create label" className="p-2 border-b-2 border-cyan-500 bg-[#f5f3ff] rounded focus:outline-none" ref={inputvalue} />
         <MdAddCircle size={24} className="fill-cyan-600" onClick={()=>addLabel()}/>
         </div>
         </div>
        </div>

    )
}