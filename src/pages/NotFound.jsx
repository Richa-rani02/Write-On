import { useNavigate } from "react-router-dom";
import { FaHome } from "../utils/icons";
export const NotFound = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className="error-page flex items-center justify-center flex-col">
                <div className="error-img w-[22rem] h-[22rem]">
                    <img src="../Assets/404notes.png" className="responsive" alt="errorstate" />
                </div>
                <button type="button" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 relative" onClick={()=>navigate("/")}>
                    <FaHome size={22} className="mr-2" />
                   Go to Home
                </button>
            </div>
        </>
    )
}