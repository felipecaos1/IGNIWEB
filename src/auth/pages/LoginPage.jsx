import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startGogleSignIn, startLoginWithEmail } from '../../store/auth/thunks';
import './login.css'

const loginData={
   email:'felipe@gmail.com',
   password:'123456'
 }

export const LoginPage = () => {

   const dispatch = useDispatch();
   const { status, errorMessage} = useSelector( state => state.auth);

   const isAuthenticating = useMemo(()=> status === 'checking',[status]);

   const {formState, onInputChange}= useForm(loginData)
  const {email, password} = formState;

   const onSubmit = (Event)=>{
      Event.preventDefault();
      // console.log(formState)
      dispatch( startLoginWithEmail(formState))
    } 

   const onGoogle = ()=>{
      // console.log('Google')
      dispatch( startGogleSignIn() );
    }
 return(
    <>
      <div className="container-principal">
         <div className="contenedor-logo">
            <img src="/assets/Igniweb-logo.png" alt="logo-web" />
         </div>
         <div className="wraper-form">
            <h2 className="form-title">Login</h2>
            <form onSubmit={onSubmit} >
               <input 
               type="email"
               placeholder="email"
               name='email'
               value={email}
               onChange={onInputChange}/>
               <input 
               type='password'
               placeholder="password"
               name='password'
               value={password}
               onChange={onInputChange}/>

               <div 
               className='error-message'
               style={{display:!!errorMessage?'':'none'}}>
                  <p>{errorMessage}</p>
               </div>
               <div className="wraper-btn">
                  <button disabled={isAuthenticating} className='btn-form' type="submit">Login</button>
                  <button disabled={isAuthenticating} className='btn-form' onClick={onGoogle}>Google</button>
               </div>
            </form>
         </div>
      </div>
    </>
   )
}