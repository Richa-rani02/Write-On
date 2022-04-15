import { Link } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import { FaHome, FaTrash } from "react-icons/fa";
import { MdNewLabel } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
export const Sidebar = () => {
    return (
        <section className="sidebar fixed w-64 bg-neutral-50 h-full pt-5">
            <Link to="/" className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg hover:bg-blue-100 text-purpleprimary">
                <FaHome size={24} className="fill-cyan-600" />
                <span >Home</span>
            </Link>
            <Link to="/" className=" font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary">
                <MdNewLabel size={24} className="fill-cyan-600" />
                <span >Labels</span>
            </Link>

            <Link to="/" className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary">
                <BiArchiveIn size={24} className="fill-cyan-600" />
                <span >Archive</span>
            </Link>

            <Link to="/" className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary">
                <FaTrash size={24} className="fill-cyan-600" />
                <span>Trash</span>
            </Link>
            <hr class="my-4 text-cyan-700" />
            <Link to="/auth" className="font-medium flex justify-start items-center gap-4 rounded-tr-3xl rounded-br-3xl py-3 px-5 text-lg mt-1 hover:bg-blue-100 text-purpleprimary">
                <RiLoginCircleFill size={24} className="fill-cyan-600" />
                <span>Login</span>
            </Link>
        </section>
    )
}