import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { librarySlice } from './library/librarySlice'

export const store = configureStore({
  reducer: {
      auth:authSlice.reducer,
      library: librarySlice.reducer
  },
})