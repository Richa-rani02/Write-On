import  axios from "axios";
import { notesUrl } from "../utils/apiUrl";
import { notesActions } from "../utils/actions";
import toast from "react-hot-toast";

export const addToNotes = async (token, notesDispatch, note) => {
    try {
        const response = await axios.post(notesUrl, {
            note:note
        }, {
            headers: {
                authorization: token
            }
        }
        );
        if (response.status === 200 || response.status === 201) {
            toast.success("Notes added ");
            notesDispatch({ type: notesActions.ADD_NOTES, payload: response.data.notes });
        }
    } catch (error) {
        toast.error("Some error occured in login. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error.response });
    }
}

export const getNotes = async (token, notesDispatch) => {
    try {
        const response = await axios.get(notesUrl, {
            headers: {
                authorization: token
            }
        }
        );
        if (response.status === 200 || response.status === 201) {
            notesDispatch({ type: notesActions.GET_NOTES, payload: response.data.notes });
        }
    } catch (error) {
        toast.error("Some error occured in login. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error.response });
    }
}