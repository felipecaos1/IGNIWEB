import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//   isreserving: false,
  messageSaved:'',
  books:[],
  reservingBook:null
//   activeNote:{
//       id:'abc',
//       title:'',
//       body:'',
//       date:445565,
//       imagesUrl:[]
//   }
}

export const librarySlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // savingNote:(state)=>{
    //   state.isSaving=true;
    // },
    // addNewEmptyNode: (state, action) => {
    //   state.notes.push(action.payload); 
    // //   state.isSaving = false;
    // },
    // setActiveNote: (state, action)=>{
    //     state.activeNote= action.payload;
    //     state.messageSaved= '';
    // },

    // setNotes:(state, action)=>{
    //   state.notes = action.payload;
    // },
    // setSaving: (state)=>{
    //   state.isSaving=true;
    //   state.messageSaved= ''
    // },
    // noteUpdated:(state, {payload})=>{
    //   state.isSaving=false;

    //   state.notes = state.notes.map( note =>{
    //     if( note.id === payload.id){
    //       return payload;
    //     }

    //     return note;
    //   });

    //   state.messageSaved= `La nota se actualizo correctamente.`
    // },
    // setPhotosToActiveNote:(state, {payload})=>{
    //   state.activeNote.imagesUrl = [...state.activeNote.imagesUrl, ...payload];
    //    state.isSaving=false;
    // },
    // clearNotesLogout:(state)=>{
    //   state.isSaving=false;
    //   state.messageSaved='';
    //   state.notes=[];
    //   state.activeNote=null;
    // },
    
    // deleteNoteById: (state, {payload})=>{
    //   console.log(payload.id);
    //   state.notes = state.notes.filter( note =>note.id!==payload)
    //   state.activeNote=null;
    // }
    
    
  },
})
export const {clearNotesLogout,savingNote, addNewEmptyNode,setActiveNote,setNotes,setSaving,noteUpdated,deleteNoteById,setPhotosToActiveNote} =librarySlice.actions