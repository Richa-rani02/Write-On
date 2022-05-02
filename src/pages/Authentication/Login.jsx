import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../services";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
export const Login = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const { authState: { error }, authDispatch} = useAuth();

    const errorMsg =
        error === ""
            ? ""
            : error.status === 500
            ? "500 : Internal Server Error"
            : error.data.errors[0];           

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const guestLogin = () => {
        setFormValues({
            email: "test@gmail.com",
            password: "Test123@",
        })

        userLogin({
            email: "test@gmail.com",
            password: "Test123@",
        },
            authDispatch, navigate
        );

    }
    const loginHandler = () => {
        userLogin(
            formValues,
            authDispatch, navigate
        );
    }
    return (
        <>
            <div className="w-full lg:w-1/2  h-full overflow-hidden ">
                <div className="px-8 py-6 text-left bg-white">
                    <h3 className="text-2xl font-bold text-center text-purpleprimary ">Login</h3>
                    {
                    errorMsg ?
                        (<div className="mt-4 px-3 py-1 bg-rose-200 text-sm"> {errorMsg} </div>)
                        : null
                    }
                    <form onSubmit={e => e.preventDefault()} >
                        <div className="mt-4">
                            <div>
                                <label className="block" for="email"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Email
                                </span></label>
                                <input type="email" placeholder="Email" name="email" value={formValues.email}
                                    className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" onChange={handleChange} required />

                            </div>
                            <div className="mt-4">
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Password
                                    </span>
                                </label>
                                <input type="password" placeholder="Password" name="password" value={formValues.password}
                                    className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" onChange={handleChange} required />

                            </div>

                            <div className="flex flex-col items-baseline">
                                <Link to="/signup" className="text-sm text-cyan-600 hover:underline mt-4">Don't have an Account ? SIGNUP</Link>
                                <button className="px-6 py-2 mt-6 w-full text-white bg-cyan-600 hover:bg-cyan-900" onClick={loginHandler}>Login</button>
                                <button className="px-6 py-2 mt-4 w-full text-purpleprimary hover:bg-cyan-900 hover:text-white border border-cyan-600" onClick={guestLogin}>Guest Login</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}