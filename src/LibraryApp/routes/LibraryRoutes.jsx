import { Navigate, Route, Routes } from "react-router-dom"
import { BooksPage } from "../pages/BooksPage"
import { ProfilePage } from "../pages/ProfilPage"

export const LibraryRoutes = () => {
 return(
     <>
     <Routes>
         <Route path="/" element={ <ProfilePage/>}/>
         <Route path="books" element={ <BooksPage/>}/>

         <Route path='/*' element={ <Navigate to='/'/>}/>
     </Routes>
     </>
   )
}