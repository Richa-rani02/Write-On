import { Header, Sidebar, Note, TextEditor,FilterModal } from "../components";
import { IoMdAdd,MdTune } from "../utils/icons";
import { useGlobalContext } from "../context/global-context";
import { useNotes } from "../context/notes-context";
import { filterNotes } from "../context/filter-context";
import { filterActions } from "../utils/actions";
import {getFilteredNotes,isNotesPinned} from "../utils/helper";
import { EmptyPage } from "./index";
export const Notes = () => {
    const {filterState,filterDispatch}=filterNotes();
    const { tooglenotesModal,toogleFilterModal } = useGlobalContext();
    const { notesState: { notesList }, setNotes, noteInput } = useNotes();
    const filteredNotes=getFilteredNotes(notesList,filterState);
    return (
        <div className="notes bg-[#FAFAFA] w-screen overflow-hidden">
            <Header />
            <Sidebar />
            <main className="py-2 px-2 lg:ml-64 ml-0 md:ml-64 relative">
                <div className="flex flex-wrap justify-around mt-8 items-center gap-6">
                    <div className="flex">
                        <button type="button" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 relative" onClick={(e) => {
                            tooglenotesModal(e);
                            setNotes(noteInput)
                        }}>
                            Add Notes
                            <IoMdAdd size={22} className="ml-2" />
                        </button>
                    </div>

                    <div className="flex pr-6">
                        <input type="search" placeholder="search here..." className="p-2.5 w-full xl:w-96 border-b-2 border-cyan-500 bg-[#f5f3ff] focus:outline-none" value={filterState.search} onChange={(e)=>(filterDispatch({type:filterActions.SEARCH_NOTES,payload:e.target.value}))}
                        />
                        <button type="button" className="text-white bg-cyan-500 hover:bg-cyan-800 focus:outline-none font-medium text-sm py-2.5 px-7 text-center inline-flex items-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                            <MdTune size={24} onClick={toogleFilterModal} />
                        </button>
                    </div>

                </div>
                {notesList.length > 0 ?
                    filteredNotes.length>0?
                    <div className="notes-list-container my-12 mx-5  p-3 ">
                        {filteredNotes.filter(note=>note.isPinned).length>0?
                           <>
                            <h1 className="font-semibold text-cyan-700" >PINNED</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                            {filteredNotes.filter(note=>note.isPinned)?.map((note) => (
                                <Note key={note.id} notes={note} />
                            ))}
                        </div>
                         <h1 className="font-semibold text-cyan-700">OTHERS</h1>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {filteredNotes.filter(note=>!note.isPinned)?.map((note) => (
                                <Note key={note.id} notes={note} />
                            ))}
                        </div>
                         </>:
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                         {filteredNotes?.map((note) => (
                             <Note key={note.id} notes={note} />
                         ))}
                     </div>
                            }
                        
                    </div> :
                     <EmptyPage msg={'No Notes found for this Combination !!'} />
                      :
                    <EmptyPage msg={'No Notes Added !!'} />
                }
            </main>
            <FilterModal/>
            <TextEditor />
        </div>

    )
}