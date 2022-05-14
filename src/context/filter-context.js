import { useReducer,useContext,createContext } from "react";
import { filterReducer } from "../reducers/filterReducer";
export const FilterContext=createContext({});

 const FilterProvider=({children})=>{

const filterIntialState={
    sortByDate:"",
    sortByPriority:"",
    search:"",
    filterByTags:[]
}    

const [filterState,filterDispatch]=useReducer(filterReducer,filterIntialState);    

    return(
        <FilterContext.Provider value={{filterState,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const  filterNotes=()=>useContext(FilterContext);

export {FilterProvider,filterNotes};