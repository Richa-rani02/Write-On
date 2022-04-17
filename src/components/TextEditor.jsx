import { useState } from 'react';
import { BsFillPinFill } from "react-icons/bs";
import { BiArchiveIn } from "react-icons/bi";
import { IoColorPalette } from "react-icons/io5";
import { useNotes } from '../context/notes-context';
import { useGlobalContext } from '../context/global-context';
import { ColorPicker } from './index';

export const TextEditor = () => {

  const { label } = useNotes();
  const {notesModal,tooglenotesModal}=useGlobalContext();

  const [palleteActive,setPalleteActive]=useState(false);
  const [priority, setPriority] = useState(["priority", "low", "medium", "High"]);

  return (
    <div className={`${notesModal ? 'fixed' : 'hidden'} w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-modal-rgba`}>
      <form className="lg:w-[50%] flex-wrap p-2 justify-self-center rounded relative bg-white shadow-lg">
        <div className="flex items-center justify-between input__pin mb-4 ">

          <input
            value=""
            type="text"
            placeholder="Title"
            name="title"
            onChange="" className='w-full border-none outline-none focus:outline-none'
          />
          <div class="btn-container w-10 h-10 flex items-center justify-center flex-wrap relative rounded-full hover:bg-blue-100 ">
            <BsFillPinFill />
          </div>
        </div>
        <textarea
          value=""
          onClick="{() => expandHandler()}"
          name="description"
          placeholder="Take a note..."
          rows="3" className="input-textarea w-full border-none outline-none focus:outline-none max-h-[3rem] "
          onChange="{changeHandler}"
        ></textarea>
        <div className="notesbtn px-2 py-3 border-t border-solid border-[rgba(95, 99, 104, 0.157)] flex items-center justify-between">
          <div className="btn-left flex items-center gap-1 lg:gap-3 text-lg mr-3">
            <div class="btn-container w-10 h-10 flex items-center justify-center flex-wrap relative rounded-full hover:bg-blue-100">
              <IoColorPalette onClick={()=>setPalleteActive(prev=>!prev)} />
              <ColorPicker palleteActive={palleteActive} setPalleteActive={setPalleteActive}  />
            </div>
            <div class="btn-container w-10 h-10 flex items-center justify-center flex-wrap relative rounded-full hover:bg-blue-100">
              <BiArchiveIn />
            </div>
            {label.length>0 &&
              <select
                className="label-container px-1.5 border border-solid border-black rounded-3xl"
                onChange=""
                value=""
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
              onChange=""
              value=""
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
            <button class="add border-0 outline-0 px-2.5 py-1 rounded-3xl text-lg bg-blue-100 mr-1 " onClick="{AddNotes}">Add</button>
            <button class="add border-0 outline-0 px-2.5 py-1 rounded-3xl text-lg bg-gray-100  " onClick={tooglenotesModal}>Cancel</button>
          </div>
        </div>
      </form>
    </div>

  )
}



