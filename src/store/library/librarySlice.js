import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isreserving: false,
  messageSaved:'',
  allBooks:[],
  avtiveReserva:null,
  booksReserve:[],
//   bookResever:{
//       id:'abc',
//       title:'',
//       Author:'',
//       Category:'',
//       description:'',
//       status:'' reserved, not-reserved,
//       date:445565,
//   }
}

export const librarySlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    reservingBook:(state)=>{
      state.isreserving=true;
    },
    addNewReserve: (state, action) => {
      state.booksReserve.push(action.payload); 
      state.isreserving = false;
    },
    setAllBooks:(state, action)=>{
      state.allBooks=action.payload;
    },

    setAllBooksReserve : ( state, action)=>{
        state.booksReserve=action.payload;
    },
    deleteReserve: (state, {payload})=>{
        console.log(payload.id);
        state.booksReserve = state.booksReserve.filter( book =>book.id!==payload);
      //   state.activeNote=null;
    },

    setActiveReserva:( state, action) =>{
      state.avtiveReserva=action.payload;
    },
    setNulActiveReserva:(state)=>{
      state.avtiveReserva=null;
    }
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
export const {setNulActiveReserva,setActiveReserva,reservingBook,addNewReserve,setAllBooks,setAllBooksReserve,deleteReserve} =librarySlice.actions