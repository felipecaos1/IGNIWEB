import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startGogleSignIn, startLoginWithEmail } from '../../store/auth/thunks';
import './login.css'

//* objeto que inicializa el formulario de login, nesesario para el custom Hook useForm();
const loginData={
   email:'',
   password:''
 }

//  * funtional component  que renderiza la pagina de login  
export const LoginPage = () => {

   const dispatch = useDispatch();  //* hook que me permite manera las acciones para cambiar el estado global de mi aplicacion 
   const { status, errorMessage} = useSelector( state => state.auth);//* hook que me permite consultar la informacion global de mi aplicaion 

   const isAuthenticating = useMemo(()=> status === 'checking',[status]); //*variable para saber en que momento mi aplicacion esta checking y asi desabilitar botones y demas 

   const {formState, onInputChange}= useForm(loginData) //* hook personalizado que me permite manejar formularios
  const {email, password} = formState;

  //* envio del formulario, llamamos la funcion que inicia la autentiacion 
   const onSubmit = (Event)=>{
      Event.preventDefault();
      // console.log(formState)
      dispatch( startLoginWithEmail(formState))
    } 
//* funcion que inicia el login with google 
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