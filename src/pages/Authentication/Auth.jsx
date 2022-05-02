import { Header } from "../../components";
import {Login} from "./Login";
import { Signup } from "./Signup";
import { useLocation } from "react-router-dom";
export const Auth = () => {
    const location=useLocation();
    return (
        <div className="auth overflow-hidden">
            <Header />
            <main className="flex flex-col overflow-hidden relative items-center">
                <div className="flex w-11/12 md:w-9/12 lg:w-3/5 h-fit  items-center bg-cyan-600 flex-wrap mt-10 shadow-lg">
                    <div className="w-0 lg:w-1/2 h-full ">
                        <div className="h-full w-full">
                            <img src="https://res.cloudinary.com/dgomw715r/image/upload/v1650011189/ProjectImages/loginbanner_nfmkwp.png" className="responsive" />
                        </div>
                    </div>
                    {location.pathname==="/signup"?<Signup/>:<Login/>}
                    </div>
            </main>
        </div>

    )
}