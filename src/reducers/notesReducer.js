import { notesActions } from "../utils/actions";
export const notesReducer=(state,action)=>{
  
    const {type,payload}=action;
    console.log(payload);
    switch(type){
        case notesActions.ADD_NOTES:{
            return{
                ...state,
                notesList:payload
            }
        }
        case notesActions.ERROR:{
            return{
                ...state,
                error:payload
            }
        }
        case notesActions.GET_NOTES:{
            return{
                ...state,
                notesList:payload
            }
        }
        case notesActions.ARCHIVE_NOTES:{
            return{
                ...state,
                notesList:payload.notes,
                archiveList:payload.archives
            }
        }
        case notesActions.TRASH_NOTES:{
            return{
                ...state,
                notesList:payload.notes,
                trashList:payload.trash
            }
        }
        case notesActions.GET_ARCHIVE:{
            return{
                ...state,
                archiveList:payload
            }
        }
        case notesActions.RESTORE_ARCHIVE:{
            return{
                ...state,
                archiveList:payload.archives,
                notesList:payload.notes,
            }
        }
        case notesActions.ARCHIVE_TO_TRASH:{
            return{
                ...state,
                trashList:payload.trash,
                archiveList:payload.archives,
            }
        }
        case notesActions.GET_TRASH:{
            return{
                ...state,
                trashList:payload,
            }
        }
        case notesActions.RESTORE_TRASH:{
            return{
                ...state,
                trashList:payload.trash,
                notesList:payload.notes
            }
        }
        case notesActions.DELETE_TRASH:{
            return{
                ...state,
                trashList:payload,
            }
        }
    }

}