import {authActions} from "../utils/actions";
export const authReducer = (state, action) => {

    switch (action.type) {
        case authActions.LOADING:
            return {
                ...state,
                loading: true,
                error: "",
            }

        case authActions.AUTH:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                userDetails: action.payload.user

            }
        case authActions.ERROR:
            return {
                ...state,
                error: action.payload
            }
        case authActions.LOGOUT:
            localStorage.removeItem("writeOnToken")
            localStorage.removeItem("user_info")
            return {
                ...state,
                token: null,
                userDetails: "",
            }

        default:
            return {
                ...state
            }
    }


}