import { notesActions } from "../utils/actions";
export const notesReducer=(state,action)=>{
  
    const {type,payload}=action;
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
    }

}