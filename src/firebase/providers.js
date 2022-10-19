import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { FirebaseAuth } from "./config";
const googleprovider = new GoogleAuthProvider();

//* EN este archivo tendremos las funciones encargadas de realizar una accion en la base de datos 


//* funcion asyncrona quue realiza el logout de la firebase
export const  logoutFirebase = async( ) =>{
    return await FirebaseAuth.signOut();
}


//* funcion asyncrona que realiza la autenticacion con google 
export const signInWithGoogle = async() =>{

    try {
        
        //* se lanza el popup de login con google 
        const result = await signInWithPopup( FirebaseAuth, googleprovider );
        // const credentials = GoogleAuthProvider.credentialFromResult (result);

        //* obtenemos la respuesta 
        const {displayName, email, photoURL, uid}= result.user;
        

        //*Retornamos la respuesta 
        return {
            ok: true,
            displayName, email, photoURL, uid
        }


        //* atrapamos errores 
    } catch (error) {
         // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage, errorCode
        }
    }

}


//* funcion asincrona para realizar el login con email and password
export const loginWithEmail = async({email, password})=>{
    
    try {
        
        //*iniciamos la peticion 
        const resp= await signInWithEmailAndPassword( FirebaseAuth, email, password);

        const { uid, displayName, photoURL} = resp.user;

        return {
            ok:true,
            uid, displayName, photoURL, email
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok:false,
            errorMessage,errorCode
        }
    }
}