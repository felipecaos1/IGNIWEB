
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { LoadingChecking } from "../component/LoadingChecking";
import { FirebaseAuth } from "../firebase/config";

import { LibraryRoutes } from "../LibraryApp/routes/LibraryRoutes";
import { login, logout } from "../store/auth/authSlice";
import { startLoadingBooks, startLoadingReserveBooks } from "../store/library/thunks";


export const AppRouter = () => {
    const { status} = useSelector( state => state.auth);
    const dispatch = useDispatch();
    console.log(status);
    useEffect(()=>{

        //cuando  nos auntenticamos y recargamos o cerramos el navegador la autenticacion persiste 
        //por lo tanto cuando llega un usuario a nuestra aplicacion preguntamos si exixte una authenticacion vigente para hacer el login y asi actualizar el store de nuestra aplicacion el cual si se borra cuando recargamos la aplicacion. si no hay una autenticacion hacemos el logout que pone nuestro store en no-authenticado
    
        //esta funcion me dice que ususario esta autenticado y se dispara cada vez que cambia
        onAuthStateChanged(FirebaseAuth, (user) =>{
    
          //preguntamos si no existe el usuario para hacer nuetro logout 
          if( !user) return dispatch( logout());
    
          const {displayName, uid, email, photoURL} = user;
          //si encontramos un usuario autenticado hacemos login para que nuestro store se actualice  
          dispatch( login({displayName, uid, email, photoURL}));

          dispatch(startLoadingBooks());
          dispatch( startLoadingReserveBooks());
    
          //como sabemos que hay un usuario autenticado mandamos a cargar los libros de ese usuario
        })
    
      },[]
      )
    //   if (status === 'checking'){
    //     return <LoadingChecking/>
    //     }
 return(
    <>
        <Routes>
            {
                status === 'authenticate'
                ?<Route path="/*" element={<LibraryRoutes/>}/>
                :<Route path="/login" element={<LoginPage/>}/>
            }
            <Route path='/*' element={<Navigate to='/login'/>}/>
            
        </Routes>
    </>
   )
}