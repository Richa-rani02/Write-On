import  axios from "axios";
import { archiveUrl} from "../utils/apiUrl";
import { notesActions } from "../utils/actions";
import toast from "react-hot-toast";

export const addToArchive = async (token, notesDispatch, note) => {
    try {
        const response = await axios.post(archiveUrl, {
            note:note
        }, {
            headers: {
                authorization: token
            }
        }
        );
        if (response.status === 200 || response.status === 201) {
            toast.success("Notes Archived ");
            notesDispatch({ type: notesActions.ADD_NOTES, payload: response.data.notes });
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error.response });
    }
}

export const getArchive = async (token, notesDispatch) => {
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
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error.response });
    }
}
export const removeArchive = async (token, notesDispatch) => {
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
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error.response });
    }
}