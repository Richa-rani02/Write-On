import { Link, useNavigate } from "react-router-dom";
import { userSignup } from "../../services";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
export const Signup = () => {
    let navigate=useNavigate();
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });
    const { authState: { error }, authDispatch } = useAuth();

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    const errorMsg =
        error === ""
            ? ""
            : error.status === 500
                ? "500 : Internal Server Error"
                : error.data.errors[0];

    const {email,password,firstName,lastName}=formValues;            
    const signupHandler=()=>{
        if (
            firstName !== "" &&
            email !== "" &&
            password !== ""
          ){
            userSignup(formValues,authDispatch, navigate)
          } 
    }            

    return (
        <>
            <div className="w-1/2 h-full overflow-hidden ">
                <div className="px-8 py-4 text-left bg-white">
                    <h3 className="text-2xl font-bold text-center text-purpleprimary">Create new Account</h3>
                    {
                    errorMsg ?
                        (<div className="mt-4 px-3 py-1 bg-rose-200 text-sm"> {errorMsg} </div>)
                        : null
                    }

                    <form onSubmit={e => e.preventDefault()} >
                        <div className="flex w-full gap-1 mt-8">
                            <div>
                                <label className="block"><span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    FirstName
                                </span></label>
                                <input type="name" placeholder="Firstname" name="firstName" value={formValues.firstName}
                                    className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" onChange={handleChange} required />

                            </div>
                            <div>
                                <label className="block"><span class="block text-sm font-medium text-slate-700">
                                    LastName
                                </span></label>
                                <input type="name" placeholder="LastName"  name="lastName" value={formValues.lastName}
                                    className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div>
                                <label className="block" for="email"><span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Email
                                </span></label>
                                <input type="email" placeholder="Email" name="email" value={formValues.email}
                                    className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" onChange={handleChange} required />
                            </div>
                            <div className="mt-4">
                                <label className="block"><span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Password
                                </span></label>
                                <input type="password" placeholder="Password" name="password" value={formValues.password}
                                    className="w-full px-4 py-2 mt-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-600" onChange={handleChange} required />

                            </div>
                            <div className="flex flex-col items-baseline">
                                <Link to="/login" className="text-sm text-cyan-600 hover:underline mt-4">Already have an Account ? LOGIN</Link>
                                <button className="px-6 py-2 mt-4 w-full text-white bg-cyan-600 hover:bg-cyan-900" onClick={signupHandler}>SignUp</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}