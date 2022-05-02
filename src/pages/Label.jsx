import { Header, Sidebar, LabelModal } from "../components";
import { MdNewLabel } from "../utils/icons";
import { useNotes } from "../context/notes-context";
import { useGlobalContext } from "../context/global-context";
export const Label = () => {
    const { toogleLabelModal } = useGlobalContext();
    const { label } = useNotes();
    return (
        <div className="notes bg-[#FAFAFA] h-full  w-screen overflow-hidden">
            <Header />
            <Sidebar />
            <main className="px-3 py-2 lg:ml-64 ml-0 md:ml-64 relative flex flex-col">
                <button type="button" className="mx-auto text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 relative mt-2 shadow" onClick={toogleLabelModal}>
                    Add Label
                    <MdNewLabel size={22} className="ml-2" />
                </button>
                <div className="notes-list-container my-12 mx-5 p-3 ">

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                        {label?.map((label, index) => (
                            <div key={index} className="w-28 h-11 flex items-center justify-center rounded bg-rose-300">
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <LabelModal />

        </div>
    )
}