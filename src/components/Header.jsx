import { FaUserCircle } from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai";
import {MdDarkMode,MdLightMode} from "react-icons/md";
export const Header=()=>{
    return(
        <header className="max-h-16 w-full flex px-6 py-4 justify-between items-center bg-[#FFFFFF] fixed inset-0 z-10 shadow-[0_0_2px_0_rgba(255,195,0,0.6)]">
           <div className="flex items-center gap-2">
           <img className="h-16 w-16"
          src="../Assets/writeonlogo.png"
          alt="logo"/>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-purpleprimary font-Sail tracking-wider">Write On</h1>
           
           </div> 
           <div className="flex justify-between gap-4">
            <FaUserCircle size={30} className="fill-cyan-600"/>   
           <MdDarkMode size={30} className="fill-purpleprimary"/>
           </div>
        </header>
    )
}