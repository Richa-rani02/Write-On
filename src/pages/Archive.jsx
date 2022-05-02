import { Header, Sidebar, Note } from "../components";
import { EmptyPage } from "./index";
import { useNotes } from "../context/notes-context";
export const Archive = () => {
    const { notesState: { archiveList } } = useNotes();
    return (
        <div className="notes bg-[#FAFAFA] h-full w-screen overflow-hidden">
            <Header />
            <Sidebar />
            <main className="px-3 py-2 lg:ml-64 ml-0 md:ml-64 relative">
                {archiveList.length > 0 ?
                    <div className="notes-list-container my-12 mx-5  p-3 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {archiveList.map((note) => (
                                <Note key={note.id} notes={note} />
                            ))}
                        </div>
                    </div>
                    :
                    <EmptyPage msg={'No Notes archived !!'} />
                }

            </main>
        </div>
    )
}