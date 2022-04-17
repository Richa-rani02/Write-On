import  axios from "axios";
import { notesUrl } from "../utils/apiUrl";
import { notesAction } from "../utils/actions";
import toast from "react-hot-toast";

export const addToNotes = async (token, notesDispatch, note) => {
    console.log(token);
    console.log(notesDispatch);
    console.log(note);
    console.log(notesUrl);
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
            console.log(response.data.notes);
            toast.success("Notes added ");
            notesDispatch({ type: notesAction.ADD_NOTES, payload: response.data.notes })
        }
    } catch (error) {
        toast.error("Some error occured in login. Try Again:( ");
        notesDispatch({ type: notesAction.ERROR, payload: error.response });
    }
}