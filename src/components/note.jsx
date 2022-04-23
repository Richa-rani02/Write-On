import { isInList } from "../utils/helper";
import { FaSignal, FaTrashAlt } from "react-icons/fa";
import { useNotes } from "../context/notes-context";
import { archiveNotes, trashNotes } from '../services/notesServices';
import { useAuth } from "../context/auth-context";
import { BiArchiveIn, BiEdit } from "react-icons/bi";
import { MdOutlineUnarchive, MdRestoreFromTrash, MdDeleteForever } from "react-icons/md";
export const Note = ({ notes }) => {

    const { notesState: { archiveList, trashList }, notesDispatch } = useNotes();
    const { authState: { token } } = useAuth();
    const isInArchive = isInList(archiveList, notes._id);
    const isInTrash = isInList(trashList, notes._id);

    const archiveHandler = () => {
        token
            ? isInArchive
                ? removeFromWatchLater(notesDispatch, token, id)
                : archiveNotes(token, notesDispatch, notes, notes._id)
            : navigate("/login")
    }

    const trashHandler = () => {
        token
            ? isInTrash
                ? removeFromWatchLater(notesDispatch, token, id)
                : trashNotes(token, notesDispatch, notes, notes._id)
            : navigate("/login")
    }

    return notes ? (
        <div className="w-full flex flex-col bg-white min-h-[13rem] rounded-md shadow-lg">
            <div className="card-top w-full h-[2%] rounded-tl-md rounded-tr-md" style={{ "background-color": notes.Color.tagColor }}></div>
            <div class="task-holder w-full h-[98%] flex flex-col justify-around p-1" style={{ "background-color": notes.Color.bgColor }}>
                {notes.tags.length > 0 &&
                    <div className="flex justify-between items-center">
                        <span class="note-card-label min-w-[6rem] mb-2.5 h-9 rounded-3xl flex items-center justify-center font-semibold text-white" style={{ "backgroundColor": notes.Color.tagColor }}> {notes.tags}
                        </span>
                    </div>
                }
                <h4 className="note-card-title font-medium text-neutral-800 break-all">{notes.title}</h4>
                <p className="note-card-desc mt-1 break-all">
                    {notes.description}
                </p>
                <div className="flex justify-between items-center px-1">
                    <p className="text-xs mr-2">{notes.createdTime}</p>
                    {notes.priority.length > 0 &&
                        <>
                            <FaSignal className="mr-0.5" />
                            <p className="text-xs mr-1">{notes.priority}</p>
                        </>}

                    <div className="note-card-btn ml-auto mt-1 flex ">

                        {isInTrash ?
                            <>
                                <MdRestoreFromTrash className="mr-3" size={24} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} />
                                <MdDeleteForever className="mr-3" size={24} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} />
                            </>
                            :
                            <>
                                {isInArchive ? <MdOutlineUnarchive className="mr-3" size={22} style={{ "color": "red", "cursor": "pointer" }} onClick={() => archiveHandler()} /> :
                                    <>
                                        <BiArchiveIn className="mr-3" size={22} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick={() => archiveHandler()} />
                                        <BiEdit className="mr-3" size={22} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick="" />
                                    </>
                                }
                                <FaTrashAlt className="mr-3" size={22} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick={() => trashHandler()} />
                            </>

                        }

                        {/* {isInTrash ?
                        <>
                         <MdRestoreFromTrash className="mr-3" size={24} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }}/>
                         <MdDeleteForever className="mr-3" size={24} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }}/>
                         </>
                        :
                        <FaTrashAlt className="mr-3" size={22} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick={()=>trashHandler()} />
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )
        : <>
        </>
}