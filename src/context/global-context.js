import { createContext,useContext,useState  } from "react";

export const GlobalContext=createContext({});

const GlobalProvider=({children})=>{

const [labelModal,setLabelModal]=useState(false);
const [notesModal,setNotesModal]=useState(false);    

const toogleLabelModal=()=>setLabelModal(prev=>!prev);
const tooglenotesModal=()=>setNotesModal(prev=>!prev);

    return (
        <GlobalContext.Provider value={{labelModal,notesModal,toogleLabelModal,tooglenotesModal}}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext=()=>useContext(GlobalContext);

export {GlobalProvider,useGlobalContext};
