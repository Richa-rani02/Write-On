import {MdAddCircle} from "react-icons/md";
export const LabelModal=()=>{
    return (
        <div className="fixed w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-modal-rgba">
         <div className="modal-body min-w-[15rem] min-h-auto relative bg-[#f5f3ff] p-2 ">
        <div className="flex items-center"> 
         <input placeholder="Create label" className="p-2 border-b-2 border-cyan-500 bg-[#f5f3ff] rounded focus:outline-none"/>
         <MdAddCircle size={24} className="fill-cyan-600"/>
         </div>
         </div>
        </div>

    )
}