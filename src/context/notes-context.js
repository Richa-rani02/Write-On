import { createContext, useContext, useState, useRef } from "react";
import { useEffect } from "react";

export const NotesContext = createContext({});

const NotesProvider = ({ children }) => {

    const [label, setLabel] = useState(["none"]);


    useEffect(()=>{
 
        let labelarr=localStorage.getItem("labellist")
        if(labelarr){
            let data=JSON.parse(labelarr)
            setLabel(data)
        }

    },[])

    const addLabel = (inputValue) => {
        let tempList=label;
        tempList.push(inputValue.current.value);
        localStorage.setItem("labellist", JSON.stringify(tempList))
        setLabel(label);
        inputValue.current.value = "";
    }

    return (
        <NotesContext.Provider value={{ label, addLabel }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
