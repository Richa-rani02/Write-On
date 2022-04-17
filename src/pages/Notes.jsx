import { Header, Sidebar,Note,LabelModal,TextEditor} from "../components";
import {IoMdAdd} from "react-icons/io";
import { useGlobalContext } from "../context/global-context";
export const Notes = () => {

const {tooglenotesModal}=useGlobalContext();
    return (
        <div className="notes bg-[#FAFAFA] h-full w-screen">
            <Header />
            <Sidebar />
            <main className="px-3 py-2 lg:ml-64 ml-0 md:ml-64 relative">
                <div class="flex flex-wrap lg:justify-between md:justify-between justify-center  items-center gap-4 mt-6 px-7 py-2 ">
                    <div
                        class="flex justify-center order-1"
                    >
                        <input type="search" placeholder="search here..." className="p-2 w-40 xl:w-72 border-b-2 border-cyan-500 bg-[#f5f3ff] rounded focus:outline-none"
                        />
                    </div>
                    <div
                        class="flex justify-center order-2 "
                    >
                        <button type="button" class="text-white mt-8 lg:mt-0  bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative" onClick={tooglenotesModal}>
                           Add Notes
                            <IoMdAdd size={22} className="ml-2"/>
                        </button>
                    </div>
                    <div
                        class="flex justify-center  xl:order-3 sm:order-4"
                    >
                        <div class="w-auto">
                            <select class="form-select  block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0
                           focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none" aria-label="Default select example">
                                <option selected>Select Priority</option>
                                <option value="1">High</option>
                                <option value="2">Medium</option>
                                <option value="3">Low</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="notes-list-container my-12 mx-5  p-3 ">
                <h5>PINNED</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                </div>
                </div>
                <div className="notes-list-container my-12 mx-5 p-3 ">
                <h5>OTHERS</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                </div>
                </div>
            </main>
            <LabelModal/>
            <TextEditor/>
           
        </div>
         
    )
}