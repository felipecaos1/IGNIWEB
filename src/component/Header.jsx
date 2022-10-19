import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import './loading.css'
import { startLogout } from '../store/auth/thunks';

//* componente headear usado en varias vistas 
export const Header = () => {

    const dispatch = useDispatch();//* hook que me permite enviar acciones a  redux 
    
    //* Funcion que inicia el proceso de cerrrar sesión 
    const onLogout =() =>{
        dispatch( startLogout());
    }
 return(
    <>
        <header>
            <nav>
                <div>
                    <img src="/assets/Igniweb-logo.png" alt="" />
                </div>
                <ul className='nav-list'>
                    <li>
                        <Link to='/books'>Books</Link>
                    </li>
                    <li>
                        <Link to='/'>Profile</Link>
                    </li>
                    <li>
                    <button className='btn-logout' onClick={onLogout}>Logout</button>
                    </li>
                </ul>
                    
                
            </nav>
        </header>
    </>
   )
}