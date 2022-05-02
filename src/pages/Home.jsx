import {Link} from "react-router-dom";
export const Home = () => {
    return (
        <div className="home flex w-screen h-screen flex-wrap">
            <div className="p-5 w-full lg:w-3/6 flex flex-col items-center justify-center text-center gap-6">
            <h1 className="text-5xl lg:text-5xl font-extrabold text-cyan-500 font-Sail tracking-wider">Write On</h1>
            <h1 className="text-lg font-medium text-purpleprimary tracking-wider ">Manage your daily tasks and work flow in a modern way!! </h1>
            <Link to="/notes" type="button" className=" mt-5 text-white bg-gradient-to-r from-cyan-700 to-blue-500 hover:bg-gradient-to-bl focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Start Writing ...</Link>
            </div>
            <div className="p-5 w-full lg:w-3/6 flex items-center justify-center text-center">
            <img src="../Assets/notesback.svg" className="w-3/5 md:w-2/6 lg:w-10/12">
            </img>
            </div>
        </div>
    )
}