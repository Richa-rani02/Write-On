import { Header } from "../../components";
import {Login} from "./Login";
import { Signup } from "./Signup";
export const Auth = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col overflow-hidden relative items-center">
                <div className="flex w-3/5 h-fit  items-center bg-cyan-600 flex-wrap mt-4 shadow-lg">
                    <div className="w-1/2 h-full ">
                        <div className="h-full w-full">
                            <img src="https://res.cloudinary.com/dgomw715r/image/upload/v1650011189/ProjectImages/loginbanner_nfmkwp.png" className="responsive" />
                        </div>
                    </div>
                    <Login/>
                    {/* <Signup/> */}
                    </div>
            </main>
        </>

    )
}