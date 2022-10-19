import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../component/Header"
import { setActiveReserva, setNulActiveReserva } from "../../store/library/librarySlice";
import { startNewBookReserve } from "../../store/library/thunks";
import './book.css'

export const BooksPage = () => {
   
   const dispatch=useDispatch();
   const {allBooks,booksReserve,avtiveReserva} = useSelector( state => state.library);

   const [filterByReserve, setFilterByReserve] = useState(allBooks);
   const [filterbooks, setFilterbooks] = useState(filterByReserve);
   
   useEffect(()=>{
      booksReserve.forEach(element => {
         const filterb = allBooks.filter(item=>item.id!==element.id_libro)
         if (filterb.length===0){
            setFilterByReserve(allBooks);
         }
         else{
            setFilterByReserve(filterb);
         }
      });  
   },[booksReserve])


   const showReserve =(bookReserve)=>{
      dispatch (setActiveReserva(bookReserve));
   }
   const onReserve =(book=[])=>{
      dispatch(startNewBookReserve(book));
      dispatch( setNulActiveReserva());
      
   }

   const limpiarModal=()=>{
      dispatch( setNulActiveReserva());
   }

   const onfilter = (Event)=>{
      // console.log(Event.target.value);
      const category=Event.target.value;

      if(category!=='todas'){
         const filterByCate = filterByReserve.filter(item=>item.categoria===category);
         setFilterbooks(filterByCate);
      }
      else{
         setFilterbooks(filterByReserve);
      }

   }
 return(
    <>
    <Header/>
    <div className="modal" style={{display:!!avtiveReserva?'':'none'}}>
       <div className="cont-info-modal">
          <div className="close-modal">
          <button  onClick={limpiarModal}>Cerrar</button>
          </div>
          <div className="info-libro">
             
             <h3>Book title: <span>{avtiveReserva?.titulo}</span></h3>
             <h3>Author: <span>{avtiveReserva?.autor}</span></h3>
             <h3>Category: <span>{avtiveReserva?.categoria}</span></h3>
          </div>
          <div className="descr">
            <div className="col-text">
               <h3>Description:</h3>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error officia optio excepturi rem aut aliquam quia, reprehenderit maiores aperiam neque esse quos vero, id at quas temporibus a accusamus sapiente.</p>
            </div>
            <div className="col-img">
               <img src="/assets/Igniweb-logo.png" alt="" />
            </div>
          </div>
          <div className="footer-modal">
             <button onClick={()=>onReserve(avtiveReserva)}>Reserve</button>
          </div>
       </div>
    </div>
    <div className="container-books">
         <div className="col-filter">
            <div className="wraper-filter">
               <h3>Filter by Category</h3>
               <select onChange={(Event)=>onfilter(Event)} defaultValue='' name="category" id="filterCategory">
                  <option value='todas' selected>Todas</option>
                  <option value='romance'>Romance</option>
                  <option value='novela'>Novelas</option>
                  <option value='aventura'>Aventura</option>
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
                           <th>Category</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           filterbooks.map(book=>(
                           <tr key={book.id}>
                              <th>{book.titulo}</th>
                              <th>{book.autor}</th>
                              <th>{book.categoria}</th>
                              <th>
                              <button onClick={()=>showReserve(book)} className="btn-reserve">
                                 Reservar
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