import { Header, Sidebar, Note, LabelModal, TextEditor } from "../components";
import { IoMdAdd } from "react-icons/io";
import { useGlobalContext } from "../context/global-context";
import { useNotes } from "../context/notes-context";
import { MdTune } from "react-icons/md";
export const Notes = () => {

    const { tooglenotesModal } = useGlobalContext();
    const { notesState: { notesList }, setNotes, noteInput } = useNotes();

    return (
        <div className="notes bg-[#FAFAFA] h-full w-screen">
            <Header />
            <Sidebar />
            <main className="px-3 py-2 lg:ml-64 ml-0 md:ml-64 relative">
                
                <div className="flex flex-wrap justify-around mt-8 items-center gap-6">
                <div className="flex">
                        <button type="button" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative" onClick={(e)=>{
                            tooglenotesModal(e);
                            setNotes(noteInput)
                            }}>
                           Add Notes
                            <IoMdAdd size={22} className="ml-2"/>
                        </button>
                    </div>
                    
                    <div className="flex pr-6">
                        <input type="search" placeholder="search here..." className="p-2.5 w-72 xl:w-96 border-b-2 border-cyan-500 bg-[#f5f3ff] focus:outline-none"
                        />
                        <button type="button" className="text-white bg-cyan-500 hover:bg-cyan-800 focus:outline-none font-medium text-sm py-2.5 px-7 text-center inline-flex items-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                            <MdTune size={24} />
                        </button>
                    </div>
                    
                </div>





                <div className="notes-list-container my-12 mx-5  p-3 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {notesList?.map((note) => (
                            <Note key={note.id} notes={note} />
                        ))}
                    </div>
                </div>
            </main>
            <LabelModal />
            <TextEditor />

        </div>

    )
}