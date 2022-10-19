import { loginWithEmail, logoutFirebase, signInWithGoogle } from "../../firebase/providers";
import { checkingCredential, login, logout } from "./authSlice";



export const startLogout =()=>{
    return async(dispatch)=>{

        await logoutFirebase();
        dispatch( logout());
        // dispatch( clearNotesLogout())
    }
}

export const startGogleSignIn =() =>{
    

    return async( dispatch) => {

        dispatch( checkingCredential() );
        const result= await signInWithGoogle();
        
        if ( !result.ok ) return dispatch( logout( result.errorMessage));

        dispatch( login( result ));

    }
}

export const startLoginWithEmail = ({email, password}) =>{

    return async( dispatch ) => {
        dispatch( checkingCredential());
        
        const {ok, uid, photoURL,errorMessage, displayName} = await loginWithEmail({email, password});
        
        if( !ok ) return dispatch( logout(errorMessage));

        dispatch( login( {uid, displayName, email, photoURL}));

    }

}