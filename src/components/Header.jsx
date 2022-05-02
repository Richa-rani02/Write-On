import {useAuth} from "../context/auth-context";
import {BiUser} from "../utils/icons";
export const Header=()=>{
    const {authState:{token}}=useAuth();
    return(
        <header className="max-h-16 w-full flex px-6 py-4 justify-between items-center bg-[#FFFFFF] fixed inset-0 z-10 shadow-[0_0_2px_0_rgba(255,195,0,0.6)]">
           <div className="flex items-center gap-2">
           <img className="h-16 w-16"
          src="../Assets/writeonlogo.png"
          alt="logo"/>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-purpleprimary font-Sail tracking-wider">Write On</h1>
           
           </div> 
           <div className="flex justify-between gap-4">
               {token && <BiUser size={30} className="fill-purpleprimary"/> }
           </div>
        </header>
    )
}