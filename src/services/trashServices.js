import  axios from "axios";
import { trashUrl} from "../utils/apiUrl";
import { notesActions } from "../utils/actions";
import toast from "react-hot-toast";

export const getTrash = async (token, notesDispatch) => {
    try {
        const { data: {trash}, status } = await axios.get(archiveUrl, {
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 || status === 201) {
            notesDispatch({ type: notesActions.GET_TRASH, payload:trash });
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error.response });
    }
}

export const restoreTrash = async (token, notesDispatch, note, id) => {
    try {
        const { data: {trash,notes }, status } = await axios.post(`/api/trash/restore${id}`, {
            note: note
        }, {
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 || status === 201) {
            toast.success("Notes restored from trash");
            notesDispatch({ type: notesActions.RESTORE_TRASH, payload: {trash:trash,notes:notes } });
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error });
    }
}


export const deleteTrash = async (token, notesDispatch, id) => {
    try {
        const { data: {trash}, status } = await axios.delete(`/api/trash/delete${id}`,{
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 || status === 201) {
            toast.success("Notes deleted");
            notesDispatch({ type: notesActions.DELETE_TRASH, payload: {trash:trash} });
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error });
    }
}

