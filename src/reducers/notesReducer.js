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
    }

}