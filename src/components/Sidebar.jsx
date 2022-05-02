import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import { FaHome, FaTrash } from "react-icons/fa";
import { MdNewLabel, MdSpeakerNotes } from "react-icons/md";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { useAuth } from "../context/auth-context";
import toast from "react-hot-toast";
import { authActions } from "../utils/actions";
import { useGlobalContext } from "../context/global-context";

export const Sidebar = () => {
    let navigate = useNavigate();
    const { authState: { token }, authDispatch } = useAuth();
    const { toogleLabelModal } = useGlobalContext();

    const logOutHandler = () => {
        const toastId = toast.loading("Logging out...");
        toast.success("You're logged out successfully", {
            id: toastId,
        });
        authDispatch({ type: authActions.LOGOUT });
        navigate("/notes");
    }

    const getActiveStyle = ({ isActive }) =>
        isActive
            ? {
                background: '#dbeafe',
            }
            : {}
    return (

        <section className={`sidebar flex flex-row md:flex-col lg:flex-col w-full fixed lg:top-0 md:top-0 top-auto bottom-0 lg:left-0  duration-1000
             p-2 md:w-[300px] lg:w-[300px] overflow-y-auto bg-neutral-50 h-auto lg:h-full mt-16 lg:mt-16 md:mt-16 z-40 lg:z-0`}>
            <NavLink to="/" className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg hover:bg-blue-100 text-purpleprimary" style={getActiveStyle}>
                <FaHome size={24} className="fill-cyan-600" />
                <span className="hidden lg:block md:block">Home</span>
            </NavLink>
            <div className=" font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary" onClick={toogleLabelModal}>
                <MdNewLabel size={24} className="fill-cyan-600" />
                <span className="hidden lg:block md:block cursor-pointer">Labels</span>
            </div>
            <NavLink to="/notes" className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary " style={(getActiveStyle)}>
                <MdSpeakerNotes size={24} className="fill-cyan-600" />
                <span className="hidden lg:block md:block">Notes</span>
            </NavLink>

            <NavLink to="/archive" className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary" style={(getActiveStyle)}>
                <BiArchiveIn size={24} className="fill-cyan-600" />
                <span className="hidden lg:block md:block">Archive</span>
            </NavLink>

            <NavLink to="/trash" className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary" style={(getActiveStyle)}>
                <FaTrash size={24} className="fill-cyan-600" />
                <span className="hidden lg:block md:block">Trash</span>
            </NavLink>
            <hr className="my-4 text-cyan-700" />
            {token ?
                <div className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary" onClick={logOutHandler}  >
                    <RiLogoutCircleFill size={24} className="fill-cyan-600" />
                    <span className="hidden lg:block md:block">Logout</span>
                </div>
                :
                <div className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary" onClick={() => navigate("/auth")}>
                    <RiLoginCircleFill size={24} className="fill-cyan-600" />
                    <span className="hidden lg:block md:block">Login</span>
                </div>
            }

        </section>
    )
}