import { useGlobalContext } from "../context/global-context";
import { useNotes } from "../context/notes-context";
import {filterNotes} from "../context/filter-context";
import { useState } from "react";
import { filterActions } from "../utils/actions";
export const FilterModal = () => {
    const {filterModal,toogleFilterModal } = useGlobalContext();
    const {filterState,filterDispatch}=filterNotes();
    const { label } = useNotes();
    const [priority, setPriority] = useState(["Low", "Medium", "High"]);

    return (
        <div className={`${filterModal ? 'fixed' : 'hidden'} w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-modal-rgba `}>
            <div className="modal-body lg:min-w-[20rem] min-h-auto relative bg-white pb-2 rounded-md ">
                <div className="flex justify-center mb-3 bg-rose-200 p-1 rounded-tr-md rounded-tl-md">
                    <h1 className="text-xl font-semibold">Fliter By</h1>
                </div>
                <div className="flex flex-col my-4 px-2 flex-wrap">
                    <h1 className="font-medium">Tags</h1>
                    <div className="flex justify-between gap-3">
                        {label.map((label, index) => (
                            <div key={index} class="form-check form-check-inline mt-3">
                                <input className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value={label.toLowerCase()} onChange={(e)=>filterDispatch({type:filterActions.FILTER_BY_TAGS,payload:{
                                    isChecked:e.target.checked,
                                    value:e.target.value
                                }})} checked={filterState.filterByTags.includes(label.toLowerCase())}/>
                                <label className="form-check-label inline-block text-gray-800" for="inlineCheckbox1">{label}</label>
                            </div>
                        )
                        )
                        }
                    </div>
                    <hr className="my-4 text-gray-700" />
                    <h1 className="font-medium">Created Date</h1>
                    <div className="flex gap-3">
                        <div class="form-check form-check-inline mt-3">
                            <input className="form-check-input form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="date" id="date" value="oldest" onChange={(e)=>filterDispatch({type:filterActions.SORT_BY_DATE,payload:e.target.value})} checked={filterState.sortByDate} />
                            <label className="form-check-label inline-block text-gray-800" for="date">Oldest</label>
                        </div>
                        <div class="form-check form-check-inline mt-3">
                            <input className="form-check-input form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="date" id="date" value="latest"  onChange={(e)=>filterDispatch({type:filterActions.SORT_BY_DATE,payload:e.target.value})} />
                            <label className="form-check-label inline-block text-gray-800" for="date">Latest</label>
                        </div>
                    </div>

                    <hr className="my-4 text-cyan-700" />
                    <h1 className="font-medium">Priority</h1>
                    <div className="flex gap-3">
                        {priority.map((priority, index) => (

                            <div key={index} className="form-check form-check-inline my-2">
                                <input checked={filterState.sortByPriority===priority} type="radio" name="proirity" id="proirity" value={priority} 
                                className="form-check-input form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" onChange={(e)=>filterDispatch({type:filterActions.SORT_BY_PRIORITY,payload:e.target.value})} />
                                <label className="form-check-label inline-block text-gray-800" for="proirity">{priority}</label>
                            </div>

                        ))}
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button className="add border-0 outline-0 px-3.5 py-0.5 rounded shadow text-lg bg-cyan-500 mr-2" onClick={()=>filterDispatch({type:filterActions.CLEAR_ALL})}>Clear</button>
                    <button className="add border-0 outline-0 px-2.5 py-0.5 rounded text-lg bg-gray-300" onClick={toogleFilterModal}>Close</button>
                </div>
            </div>
        </div>

    )
}