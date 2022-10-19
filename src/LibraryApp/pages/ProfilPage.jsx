import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Header } from "../../component/Header";
import './profile.css'

export const ProfilePage = () => {

   const {displayName,photoUrl,email} = useSelector( state => state.auth)
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
               <h4>Number of reserves: 5</h4>
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
                        <tr>
                           <th>Cien Años de soledad</th>
                           <th>Gabriel Garcia Marquez</th>
                           <th>19/10/2022</th>
                           <th>
                              <button className="btn-delete">
                                 <img src="/assets/delete.png" alt="icono-borrar" />
                              </button>
                           </th>
                        </tr>
                        <tr>
                           <th>Cien Años de soledad</th>
                           <th>Gabriel Garcia Marquez</th>
                           <th>19/10/2022</th>
                           <th>
                              <button className="btn-delete">
                                 <img src="/assets/delete.png" alt="icono-borrar" />
                              </button>
                           </th>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
     </div>
    </>
   )
}