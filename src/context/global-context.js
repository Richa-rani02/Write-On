import { createContext,useContext,useState  } from "react";

export const GlobalContext=createContext({});

const GlobalProvider=({children})=>{

const [labelModal,setLabelModal]=useState(false);
const [notesModal,setNotesModal]=useState(false);    

const toogleLabelModal=(e)=>{
    e.preventDefault();
    setLabelModal(prev=>!prev)
};
const tooglenotesModal=(e)=>{
    e.preventDefault();
    setNotesModal(prev=>!prev)
};

    return (
        <GlobalContext.Provider value={{labelModal,notesModal,toogleLabelModal,tooglenotesModal,setNotesModal}}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext=()=>useContext(GlobalContext);

export {GlobalProvider,useGlobalContext};
