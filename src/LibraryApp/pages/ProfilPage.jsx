import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Header } from "../../component/Header";
import { startDeleteReserve } from "../../store/library/thunks";
import './profile.css'

export const ProfilePage = () => {

   const dispatch= useDispatch();

   const {displayName,photoUrl,email} = useSelector( state => state.auth);
   const {booksReserve} = useSelector( state => state.library);

   const onDelete= (id)=>{

      dispatch( startDeleteReserve(id));

   }
 return(
    <>
     <Header/>

     <div className="container-profile">
         <div className="col-data">
            <div className="wraper-data">
               <div className="wraper-img">
                  <img src={photoUrl} alt="avatar"/>
               </div>
               <h3>{displayName}</h3>
               <h4>Number of reserves: {booksReserve.legnth}</h4>
               <div className="btn-more-reserves">
               <Link to='/books'> + Book </Link>
               </div>
            </div>
            <div className="wraper-more-info">
                  <h3>Information:</h3>
                  <div className="info-item">
                     <h4>Email: <span>{email}</span></h4>
                  </div>
                  <div className="info-item">
                     <h4>Age: <span>26</span></h4>
                  </div>
                  <div className="info-item">
                     <h4>Address: <span>Cra 4 #5-52</span></h4>
                  </div>
                  <div className="info-item">
                     <h4>Counrty: <span>Colombia</span></h4>
                  </div>
            </div>
         </div>
         <div className="col-reservas">
            <div className="wraper-reserves">
               <h3>My Reserves</h3>
               <div className="wraper-table">
                  <table>
                     <thead>
                        <tr>
                           <th>Title</th>
                           <th>Author</th>
                           <th>Date</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           booksReserve.map(book=>(
                        <tr key={book.id}>
                           <th>{book.title}</th>
                           <th>{book.Author}</th>
                           <th>{new Date(book.date).toDateString()}</th>
                           <th>
                              <button onClick={()=>onDelete(book.id)} className="btn-delete">
                                 <img src="/assets/delete.png" alt="icono-borrar" />
                              </button>
                           </th>
                        </tr>
                           ))
                        }
                       
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
     </div>
    </>
   )
}