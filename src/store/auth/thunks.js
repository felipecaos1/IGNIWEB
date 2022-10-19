import { loginWithEmail, logoutFirebase, signInWithGoogle } from "../../firebase/providers";
import { checkingCredential, login, logout } from "./authSlice";


//* este archivo se encarga de establecer las acciones asincronas 

//* funcion que inicia el proceso de logout
export const startLogout =()=>{
    return async(dispatch)=>{

        await logoutFirebase();
        //* cuando obtenemos la respuesta disparamos alaccion que le infoam al store global que se ha cerrado sesion y ahora no temos info de ningun usuario 
        dispatch( logout());
        // dispatch( clearNotesLogout())
    }
}


//* funcion que espera la respuesta de el inicio de sesion con google 
export const startGogleSignIn =() =>{
    

    return async( dispatch) => {

        dispatch( checkingCredential() );
        const result= await signInWithGoogle();
        //* cuando tenemos un resultado satisfactorio diparamos la accion que establoace la info en el store 
        if ( !result.ok ) return dispatch( logout( result.errorMessage));

        dispatch( login( result ));

    }
}

//* funcion que espera la respuesta del proceso de iniciar sesion con email
export const startLoginWithEmail = ({email, password}) =>{

    return async( dispatch ) => {
        dispatch( checkingCredential());
        
        const {ok, uid, photoURL,errorMessage, displayName} = await loginWithEmail({email, password});
        
        
        if( !ok ) return dispatch( logout(errorMessage));

//* cuando obtenemos un resultado positivo disparamos la accion que actualiza la info ene le store, ahora la aplicacion sabe la informacion del ususario logueado 
        dispatch( login( {uid, displayName, email, photoURL}));

    }

}