import { Header } from "../components";
import { useAuth } from "../context/auth-context";
import toast from "react-hot-toast";
import { authActions } from "../utils/actions";
import {useEffect} from "react";
export const UserProfile = () => {
    const {authState:{userDetails},authDispatch} =useAuth();
    let user;
    const logOutHandler = () => {
        const toastId = toast.loading("Logging out...");
        toast.success("You're logged out successfully", {
            id: toastId,
        });
        authDispatch({ type: authActions.LOGOUT });
    }
    return (
        <div className="notes bg-[#FAFAFA] h-full  w-screen overflow-hidden">
            <Header />
            <main className="px-3 py-2 relative flex justify-center">
                <div className="mt-6 w-[20rem] h-auto bg-white p-3">
                    <h1 className="text-lg text-cyan-700 font-semibold my-3">UserName</h1> <span inline text-sm font-normal>{userDetails?.user_info?.firstName +' '+ userDetails?.user_info?.lastName}</span> 
                    <h1 className="text-lg text-cyan-700 font-semibold my-3">Email Id </h1> <span inline text-sm font-normal>{userDetails?.user_info?.email} </span>
                    <button type="button" className="mt-4 w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-md px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 relative" onClick={logOutHandler}>
                        LogOut
                    </button>
                </div>
            </main>
        </div>
    )
}