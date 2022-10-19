
//* este archivo se encarga establecer la infoamcion referente a los libros en el global store 
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
    //* accion para agregar una nueva reserva al array de reservas 
    addNewReserve: (state, action) => {
      state.booksReserve.push(action.payload); 
      state.isreserving = false;
    },
    //* accin que establece en el global  store los libros obtenidos de la base de datos al inicia sesion 
    setAllBooks:(state, action)=>{
      state.allBooks=action.payload;
    },
//* accion que establece en el global store las reservas obtenidas de la base de datos 
    setAllBooksReserve : ( state, action)=>{
        state.booksReserve=action.payload;
    },

    //* accion que borra una reserva del global store 
    deleteReserve: (state, {payload})=>{
        console.log(payload.id);
        state.booksReserve = state.booksReserve.filter( book =>book.id!==payload);
      //   state.activeNote=null;
    },
// * accion par poner activo el libro que se quiere reservar 
    setActiveReserva:( state, action) =>{
      state.avtiveReserva=action.payload;
    },
    
    setNulActiveReserva:(state)=>{
      state.avtiveReserva=null;
    }
    
    
    
  },
})
export const {setNulActiveReserva,setActiveReserva,reservingBook,addNewReserve,setAllBooks,setAllBooksReserve,deleteReserve} =librarySlice.actions