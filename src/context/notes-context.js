import { createContext, useContext, useState, useRef,useReducer } from "react";
import { useEffect } from "react";
import { notesReducer } from "../reducers/notesReducer";
import {getNotes,getArchive,getTrash} from "../services/index";
import { useAuth } from "./auth-context";

export const NotesContext = createContext({});

const NotesProvider = ({ children }) => {

    let date= new Date().toLocaleString();
    const [label, setLabel] = useState(['Home','Daily','Weekly','work','other']);
    const [isEditing,setIsEditing]=useState(false);
    const noteInput={
        title:"",
        description:"",
        tags:['Home'],
        Color:{tagColor:"#a1a1aa", bgColor:"#f4f4f5"},
        priority:"",
        createdTime:date,
        error:"",
        isPinned:false
    }
    const [notes,setNotes]=useState({...noteInput});

    const {authState:{token}}=useAuth();

    const initialNotesValue={
        loading:false,
        error:"",
        notesList:[],
        archiveList:[],
        trashList:[],
    }

    const [notesState,notesDispatch]=useReducer(notesReducer,initialNotesValue);
    

    useEffect(() => {

        let labelarr = localStorage.getItem("labellist")
        if (labelarr) {
            let data = JSON.parse(labelarr)
            setLabel(data)
        }
        getNotes(token,notesDispatch);
        getArchive(token,notesDispatch);
        getTrash(token,notesDispatch);

    }, [])

    const addLabel = (inputValue) => {
        let tempList = label;
        tempList.push(inputValue.current.value);
        localStorage.setItem("labellist", JSON.stringify(tempList))
        setLabel(label);
        inputValue.current.value = "";
    }
    return (
        <NotesContext.Provider value={{ label, addLabel,notesState,notesDispatch,notes,setNotes,noteInput,isEditing,setIsEditing }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
