import { createContext, useContext, useState, useRef,useReducer } from "react";
import { useEffect } from "react";
import { notesReducer } from "../reducers/notesReducer";
import {getNotes} from "../services/notesServices";
import { useAuth } from "./auth-context";

export const NotesContext = createContext({});

const NotesProvider = ({ children }) => {

    const [label, setLabel] = useState([]);

    const {authState:{token}}=useAuth();
    const initialNotesValue={
        loading:false,
        error:"",
        notesList:[],
    }

    const [notesState,notesDispatch]=useReducer(notesReducer,initialNotesValue);
    

    useEffect(() => {

        let labelarr = localStorage.getItem("labellist")
        if (labelarr) {
            let data = JSON.parse(labelarr)
            setLabel(data)
        }
        getNotes(token,notesDispatch);
    }, [])

    const addLabel = (inputValue) => {
        let tempList = label;
        tempList.push(inputValue.current.value);
        localStorage.setItem("labellist", JSON.stringify(tempList))
        setLabel(label);
        inputValue.current.value = "";
    }
    return (
        <NotesContext.Provider value={{ label, addLabel,notesState,notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
