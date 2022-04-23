import { useState } from 'react';
import { BsFillPinFill } from "react-icons/bs";
import { BiArchiveIn } from "react-icons/bi";
import { IoColorPalette } from "react-icons/io5";
import { useNotes } from '../context/notes-context';
import { useGlobalContext } from '../context/global-context';
import { useAuth } from '../context/auth-context';
import { ColorPicker } from './index';
import { addToNotes } from '../services/notesServices';

export const TextEditor = () => {
  let date= new Date().toLocaleDateString();
  const { label,notesState,notesDispatch} = useNotes();
  const {notesModal,tooglenotesModal,setNotesModal}=useGlobalContext();
  const {authState:{token}}=useAuth();
  const [palleteActive,setPalleteActive]=useState(false);
 
  const [priority, setPriority] = useState(["Priority", "Low", "Medium", "High"]);
  const [notes,setNotes]=useState({
    title:"",
    description:"",
    tags:[],
    Color:{tagColor:"#fafafa", bgColor:"#e4e4e7"},
    priority:"",
    createdTime:date
  })


 const AddNotes=(e)=>{
   e.preventDefault();
   console.log(notes);
   addToNotes(token,notesDispatch,notes);
   setNotesModal(prev=>!prev);
 }

  return (
    <div className={`${notesModal ? 'fixed' : 'hidden'} w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-modal-rgba`}>
      <form className="lg:w-[50%] flex-wrap p-2 justify-self-center rounded relative bg-white shadow-lg">
        <div className="flex items-center justify-between input__pin mb-4 ">

          <input
            value={notes.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e)=>{setNotes({...notes,title:e.target.value})}} className='w-full border-none outline-none focus:outline-none'
          />
        </div>
        <textarea
          value={notes.description}
          name="description"
          placeholder="Take a note..."
          rows="3" className="input-textarea w-full border-none outline-none focus:outline-none max-h-[3rem] "
          onChange={(e)=>{setNotes({...notes,description:e.target.value})}}
        ></textarea>
        <div className="notesbtn px-2 py-3 border-t border-solid border-[rgba(95, 99, 104, 0.157)] flex items-center justify-between">
          <div className="btn-left flex items-center gap-1 lg:gap-3 text-lg mr-3">
            <div class="btn-container w-10 h-10 flex items-center justify-center flex-wrap relative rounded-full hover:bg-blue-100">
              <IoColorPalette onClick={()=>setPalleteActive(prev=>!prev)} />
              <ColorPicker palleteActive={palleteActive} setPalleteActive={setPalleteActive} setNotes={setNotes} notes={notes}  />
            </div>
            <div class="btn-container w-10 h-10 flex items-center justify-center flex-wrap relative rounded-full hover:bg-blue-100">
              <BiArchiveIn />
            </div>
            {label.length>0 &&
              <select
                className="label-container px-1.5 border border-solid border-black rounded-3xl"
                onChange={(e)=>{setNotes({...notes,tags:[e.target.value]})}}
                value={notes.tags}
                name="labelSelector"
              >
                {label.map((label) => {
                  return (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  );
                })}
              </select>
            }

            <select
              className="priority-container px-1.5 border border-solid border-black rounded-3xl"
              onChange={(e)=>{setNotes({...notes,priority:e.target.value})}}
              value={notes.priority}
              name="priorityselector"
            >
              {priority.map((priority) => {
                return (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="btn-right">
            <button class="add border-0 outline-0 px-2.5 py-1 rounded-3xl text-lg bg-blue-100 mr-1 " onClick={AddNotes}>Add</button>
            <button class="add border-0 outline-0 px-2.5 py-1 rounded-3xl text-lg bg-gray-100  " onClick={tooglenotesModal}>Cancel</button>
          </div>
        </div>
      </form>
    </div>

  )
}



