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
                <div className="mt-4">
                            <label className="block">Name</label>
                            <input type="name" placeholder="Name"
                                className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" />
                            <span className="text-xs tracking-wide text-red-600">Name is required </span>
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
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-cyan-600 hover:bg-cyan-900">Signup</button>
                            <a href="#" className="text-sm text-cyan-600 hover:underline">Already have an Account ? LOGIN</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}