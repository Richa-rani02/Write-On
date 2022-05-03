import { isInList } from "../utils/helper";
import { useNotes } from "../context/notes-context";
import { archiveNotes, trashNotes,restoreArchive,moveArchiveToTrash,restoreTrash,deleteTrash } from '../services/index';
import { useAuth } from "../context/auth-context";
import { useGlobalContext } from "../context/global-context";
import { MdOutlineUnarchive, MdRestoreFromTrash, MdDeleteForever,FcHighPriority,FcLowPriority,FcMediumPriority, FaTrashAlt,BiArchiveIn, BiEdit} from "../utils/icons";
export const Note = ({ notes }) => {

    const { notesState: { archiveList, trashList }, notesDispatch,isEditing,setIsEditing,setNotes} = useNotes();
    const {tooglenotesModal}=useGlobalContext();
    const { authState: { token } } = useAuth();
    const isInArchive = isInList(archiveList, notes._id);
    const isInTrash = isInList(trashList, notes._id);

    const archiveHandler = () => {
        token
            ? isInArchive
                ? restoreArchive(token, notesDispatch, notes, notes._id)
                : archiveNotes(token, notesDispatch, notes, notes._id)
            : navigate("/login")
    }

    const NotesToTrash = () => {
        isInTrash
            ? removeFromWatchLater(notesDispatch, token, id)
            : trashNotes(token, notesDispatch, notes, notes._id)
    }

    const ArchiveToTrash=()=>{
        moveArchiveToTrash(token,notesDispatch,notes,notes._id)
    }

    const trashToNotes=()=>{
        restoreTrash(token,notesDispatch,notes,notes._id);
    }

    const deleteFromTrash=()=>{
        deleteTrash(token,notesDispatch,notes._id);
    }

    const editHandler=(e)=>{
        tooglenotesModal(e);
            setNotes(notes);
            setIsEditing(true);   
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
                        (() => {
                            switch (notes.priority) {
                              case 'Low':
                                return <>
                               <FcLowPriority size={22} className="mr-0.5" />
                               <p className="text-xs mr-1">{notes.priority}</p>
                                </>;
                              case 'Medium':
                                return <>
                               <FcMediumPriority size={22} className="mr-0.5" />
                               <p className="text-xs mr-1">{notes.priority}</p>
                                </>;
                              case 'High':
                                return <>
                               <FcHighPriority size={22} className="mr-0.5" />
                               <p className="text-xs mr-1">{notes.priority}</p>
                                </>;
                              default:
                                return null;
                            }
                          })()
                        }

                    <div className="note-card-btn ml-auto mt-1 flex ">

                        {isInTrash ?
                            <>
                                <MdRestoreFromTrash className="mr-3" size={24} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick={() => trashToNotes()} />
                                <MdDeleteForever className="mr-3" size={24} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick={() => deleteFromTrash()} />
                            </>
                            :
                            <>
                                {isInArchive ? <MdOutlineUnarchive className="mr-3" size={22} style={{ "color": "red", "cursor": "pointer" }} onClick={() => archiveHandler()} /> :
                                    <>
                                        <BiArchiveIn className="mr-3" size={22} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick={() => archiveHandler()} />
                                        <BiEdit className="mr-3" size={22} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick={editHandler} />
                                    </>
                                }
                                <FaTrashAlt className="mr-3" size={22} style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick={() => isInArchive ?ArchiveToTrash():NotesToTrash()} />
                            </>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
        : <>
        </>
}