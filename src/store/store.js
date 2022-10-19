import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { librarySlice } from './library/librarySlice'

//* en este archivo se establece la composicion de nuestro global store. en este caso bamos a tener dos fuentes de informacion rpincipal  
export const store = configureStore({
  reducer: {

      auth:authSlice.reducer, //* info de autenticacion 
      library: librarySlice.reducer//* info referente a los libros 
  },
})