import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { FirebaseAuth } from "./config";
const googleprovider = new GoogleAuthProvider();


export const  logoutFirebase = async( ) =>{
    return await FirebaseAuth.signOut();
}

export const signInWithGoogle = async() =>{

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleprovider );
        // const credentials = GoogleAuthProvider.credentialFromResult (result);

        const {displayName, email, photoURL, uid}= result.user;
        

        return {
            ok: true,
            displayName, email, photoURL, uid
        }



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

export const loginWithEmail = async({email, password})=>{
    
    try {
        
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