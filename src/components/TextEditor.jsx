import { useState } from 'react';
import { IoColorPalette,BsPin,BsFillPinFill } from "../utils/icons";
import { useNotes } from '../context/notes-context';
import { useGlobalContext } from '../context/global-context';
import { useAuth } from '../context/auth-context';
import { ColorPicker } from './index';
import { addToNotes, editNotes } from '../services/notesServices';

export const TextEditor = () => {

  const { label, notesDispatch, notes, setNotes, noteInput, isEditing, setIsEditing } = useNotes();
  const { notesModal, tooglenotesModal } = useGlobalContext();
  const { authState: { token } } = useAuth();
  const [palleteActive, setPalleteActive] = useState(false);
  const [priority, setPriority] = useState(["Priority", "Low", "Medium", "High"]);

  const AddNotes = (e) => {
    e.preventDefault();
    if (notes.title.length == 0 || notes.description.length == 0) {
      setNotes({ ...notes, error: "Title and description is Blank" })
    } else {
      addToNotes(token, notesDispatch, notes);
      tooglenotesModal(e);
      setNotes(noteInput);

    }

  }

  const editHandler = (e) => {
    e.preventDefault();
    editNotes(token, notesDispatch, notes, notes._id);
    setNotes(noteInput);
    setIsEditing(false);
    tooglenotesModal(e);
  }

  return (
    <div className={`${notesModal ? 'fixed' : 'hidden'} w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-modal-rgba`}>
      <form className='lg:w-[50%] flex-wrap p-2 justify-self-center rounded relative shadow-lg' style={{ "backgroundColor": notes.Color.bgColor }}>
        <div className="flex items-center justify-between input__pin mb-4">

          <input
            value={notes.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) => { setNotes({ ...notes, title: e.target.value }) }} className='w-full border-none outline-none focus:outline-none bg-transparent'
          />
          {notes.isPinned?<BsFillPinFill size={22} onClick={()=>setNotes({...notes,isPinned:false})}/>:
          <BsPin size={22} onClick={()=>setNotes({...notes,isPinned:true})}/>
  }
        </div>

        <textarea
          value={notes.description}
          name="description"
          placeholder="Take a note..."
          rows="3" className='input-textarea w-full border-none outline-none focus:outline-none max-h-[3rem] bg-transparent'
          onChange={(e) => { setNotes({ ...notes, description: e.target.value }) }}
        ></textarea>
        <p className='text-red-500'>{notes.error}</p>
        <div className='notesbtn px-2 py-3 border-t border-solid border-[rgba(95, 99, 104, 0.157)] flex items-center justify-between flex-col md:flex-row lg:flex-row'>
          <div className="btn-left flex items-center gap-1 lg:gap-3 text-lg mr-3">
            <div className="btn-container w-10 h-10 flex items-center justify-center flex-wrap relative rounded-full hover:bg-blue-100">
              <IoColorPalette size={22} onClick={() => setPalleteActive(prev => !prev)} />
              <ColorPicker palleteActive={palleteActive} setPalleteActive={setPalleteActive} setNotes={setNotes} notes={notes} />
            </div>
            {label.length > 0 &&
              <select
                className="label-container px-1.5 border border-solid border-black rounded-3xl"
                onChange={(e) => { setNotes({ ...notes, tags: [e.target.value] }) }}
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
              onChange={(e) => { setNotes({ ...notes, priority: e.target.value }) }}
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
          <div className="w-full md:w-auto lg:w-auto btn-right flex justify-between mt-3 lg:mt-0">
            <button className="add border-0 outline-0 px-3.5 py-0.5 rounded-3xl text-lg bg-blue-100 mr-1 " onClick={isEditing ? editHandler : AddNotes}>{isEditing?"update":"Add"}</button>
            <button className="add border-0 outline-0 px-2.5 py-0.5 rounded-3xl text-lg bg-gray-100  " onClick={tooglenotesModal}>Cancel</button>
          </div>
        </div>
      </form>
    </div>

  )
}



