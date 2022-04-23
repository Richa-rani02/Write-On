import  axios from "axios";
import { notesUrl } from "../utils/apiUrl";
import { notesActions } from "../utils/actions";
import toast from "react-hot-toast";

export const addToNotes = async (token, notesDispatch, note) => {
    try {
        const  {data:{notes},status} = await axios.post(notesUrl, {
            note:note
        }, {
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 ||status === 201) {
            toast.success("Notes added ");
            notesDispatch({ type: notesActions.ADD_NOTES, payload:notes });
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error.response });
    }
}

export const getNotes = async (token, notesDispatch) => {
    try {
        const {data:{notes},status} = await axios.get(notesUrl, {
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 ||status === 201) {
            notesDispatch({ type: notesActions.GET_NOTES, payload:[...notes] });
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error.response });
    }
}

export const archiveNotes = async (token, notesDispatch, note, id) => {
    console.log(note);
    console.log(id);
    try {
        const {data:{archives,notes},status} = await axios.post(`/api/notes/archives/${id}`, {
            note:note
        }, {
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 || status === 201) {
            toast.success("Notes archived");
            notesDispatch({ type: notesActions.ARCHIVE_NOTES, payload:{ notes:notes, archives:archives } });
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error});
    }
}

export const trashNotes = async (token, notesDispatch, note, id) => {
    console.log(note);
    console.log(id);
    try {
        const {data:{notes},status} = await axios.delete(`/api/notes/${id}`,{
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 || status === 201) {
            toast.success("Notes moved to trash");
            notesDispatch({ type: notesActions.TRASH_NOTES, payload:notes});
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error});
    }
}


