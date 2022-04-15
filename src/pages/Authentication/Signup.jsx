import { Link } from "react-router-dom";
export const Signup = () => {
    return (
        <>
            <div className="w-1/2 h-full overflow-hidden ">
                <div className="px-8 py-4 text-left bg-white">
                    <div class="flex justify-center">
                        <img src="../Assets/loginicon1.png" className="w-20 h-20" fill="none" />
                    </div>
                    <h3 className="text-2xl font-bold text-center text-purpleprimary">Create new Account</h3>
                    <form action="">
                        <div className="flex w-full gap-1 mt-4">
                        <div>
                            <label className="block">FirstName</label>
                            <input type="name" placeholder="Firstname"
                                className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" />
                            <span className="text-xs tracking-wide text-red-600">FirstName is required </span>
                        </div>
                        <div>
                            <label className="block">LastName</label>
                            <input type="name" placeholder="LastName"
                                className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" />
                        </div>
                        </div>
                        <div className="mt-4">
                            <div>
                                <label className="block" for="email">Email</label>
                                <input type="text" placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" />
                                <span className="text-xs tracking-wide text-red-600">Email field is required </span>
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input type="password" placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" />
                                <span className="text-xs tracking-wide text-red-600">Password is required </span>
                            </div>
                            <div className="flex flex-col items-baseline">
                                <Link to="/login" className="text-sm text-cyan-600 hover:underline mt-4">Already have an Account ? LOGIN</Link>
                                <button className="px-6 py-2 mt-4 w-full text-white bg-cyan-600 hover:bg-cyan-900">SignUp</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}