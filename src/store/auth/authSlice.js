import { createSlice } from '@reduxjs/toolkit'

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
    login: (state, { payload}) => {
       
        state.status='authenticate', //, cheking, authenticate
        state.uid= payload.uid;
        state.email= payload.email;
        state.displayName= payload.displayName;
        state.photoUrl= payload.photoURL;
        state.errorMessage= null;
    },

    logout: (state, {payload}) =>{
        
        state.status='not-authenticate', //, cheking, authenticate
        state.uid= null;
        state.email= null;
        state.displayName= null;
        state.photoUrl= null;
        state.errorMessage= payload;
    },

    checkingCredential: ( state ) =>{
        state.status ='checking';
    },
    
    
  },
})
export const { login, logout, checkingCredential } = authSlice.actions