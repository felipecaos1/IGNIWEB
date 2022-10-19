import { Header } from "../../component/Header"
import './book.css'

export const BooksPage = () => {
 return(
    <>
    <Header/>
    <div className="container-books">
         <div className="col-filter">
            <div className="wraper-filter">
               <h3>Filter by Category</h3>
               <select name="category" id="filterCategory">
                  <option selected>Todas</option>
                  <option value='romance'>Romance</option>
                  <option value='novelas'>Novelas</option>
                  <option value='avrntura'>Aventura</option>
               </select>
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
                              <button className="btn-reserve">
                                 Reservar
                              </button>
                           </th>
                        </tr>
                        <tr>
                           <th>Cien Años de soledad</th>
                           <th>Gabriel Garcia Marquez</th>
                           <th>19/10/2022</th>
                           <th>
                              <button className="btn-reserve">
                                 Reservar
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