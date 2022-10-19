import { createSlice } from '@reduxjs/toolkit'

//* este archivo corresponde a nuestro reducer, desde aca se va a controlar las acciones y la info que se guardara en el global store para poder se accedidad desde cualquier puento de la aplicacion 

const initialState = {
  status:'checking', //, checking, authenticate, not-authenticate
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    //* accion de login, se recibe y se asigna la info obtenida de los procesos asincronos con la base de datos, en este peunto nuestra aplicaion ya sabe que hay alguien logueado
    login: (state, { payload}) => {
       
        state.status='authenticate', //, cheking, authenticate
        state.uid= payload.uid;
        state.email= payload.email;
        state.displayName= payload.displayName;
        state.photoUrl= payload.photoURL;
        state.errorMessage= null;
    },

    //* accion para hacer logout de la aplicacion, nuwestras variables globales se reestablecen y asi nuestra aplicacion sabe que han cerrado session 

    logout: (state, {payload}) =>{
        
        state.status='not-authenticate', //, cheking, authenticate
        state.uid= null;
        state.email= null;
        state.displayName= null;
        state.photoUrl= null;
        state.errorMessage= payload;
    },

    //*accion para poner en estado de loading la aplicacion, asi saber que se esta esperando una respuesta  
    checkingCredential: ( state ) =>{
        state.status ='checking';
    },
    
    
  },
})
export const { login, logout, checkingCredential } = authSlice.actions