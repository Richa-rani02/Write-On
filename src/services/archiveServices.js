import  axios from "axios";
import { archiveUrl} from "../utils/apiUrl";
import { notesActions } from "../utils/actions";
import toast from "react-hot-toast";

export const getArchive = async (token, notesDispatch) => {
    try {
        const { data: {archives}, status } = await axios.get(archiveUrl, {
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 || status === 201) {
            notesDispatch({ type: notesActions.GET_ARCHIVE, payload:archives });
        }
    } catch (error) {
        notesDispatch({ type: notesActions.ERROR, payload: error.response });
    }
}

export const moveArchiveToTrash = async (token, notesDispatch, note, id) => {
    try {
        const { data: { archives, trash }, status } = await axios.post(`/api/archives/trash/${id}`, {
            note: note
        }, {
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 || status === 201) {
            toast.success("Notes moved to trash");
            notesDispatch({ type: notesActions.ARCHIVE_TO_TRASH, payload: {trash: trash,archives:archives } });
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error });
    }
}

export const restoreArchive = async (token, notesDispatch, note, id) => {
    try {
        const { data: { archives,notes }, status } = await axios.post(`/api/archives/restore/${id}`, {
            note: note
        }, {
            headers: {
                authorization: token
            }
        }
        );
        if (status === 200 || status === 201) {
            toast.success("Notes restored to notesList");
            notesDispatch({ type: notesActions.RESTORE_ARCHIVE, payload: {archives:archives,notes:notes } });
        }
    } catch (error) {
        toast.error("Some error occured. Try Again:( ");
        notesDispatch({ type: notesActions.ERROR, payload: error });
    }
}

