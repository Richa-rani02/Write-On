import { createContext, useContext,useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const getToken = localStorage.getItem("writeOnToken");
    const getUserInfo = JSON.parse(localStorage.getItem("user_info"))
    const authInitialState = {
        error: "",
        token: getToken ?? '',
        userDetails: getUserInfo || null,
    };

    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    return (
        <authContext.Provider value={{ authState, authDispatch}}>
            {children}
        </authContext.Provider>
    )
}

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
