import { collection, doc, setDoc,deleteDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { LoadBooks } from "../../helpers/loadBooks";
import { loadreserveBooks } from "../../helpers/loadReserveBooks";
import { addNewReserve, deleteReserve, setAllBooks, setAllBooksReserve } from "./librarySlice";

//* En este archivo se encuentran las funciones asincronas que gestionan los libros en la base de datos

//* funcion que agrega una nueva reserva a la base de datos 
export const  startNewBookReserve =({titulo,categoria,autor,id}) =>{

    return async( dispatch, getState) =>{

        const { uid } =getState().auth;
        const newReserve ={
            title:titulo,
            Author:autor,
            Category:categoria,
            description:'Descripcion resumida del libro',
            date:new Date().getTime(),
            id_libro:id
        }

        const newDoc = doc( collection(FireBaseDB,`${uid}/booksReserve/listBook`));

        await setDoc(newDoc,newReserve);
        newReserve.id= newDoc.id;

        dispatch( addNewReserve(newReserve)); 
        // console.log(newDoc);
    } 
}

//* funcion que recupera los libros disponibles de la base de datos 
export const startLoadingBooks = () => {
    return async(dispatch, getState) =>{
        const books = await LoadBooks();
        dispatch(setAllBooks(books));
    }
}

//* funcion que recupera las reservas de las base de datos 
export const startLoadingReserveBooks = () => {
    return async(dispatch, getState) =>{
        const {uid} = getState().auth;
        const booksReserve = await loadreserveBooks(uid);

        dispatch(setAllBooksReserve(booksReserve));

    }
}

//* funcion que elimina una reserva de la base de datos 
export const startDeleteReserve = (id) =>{

    return async(dispatch, getState) =>{

        const { uid } =getState().auth;

        const docRef = doc(FireBaseDB,`${uid}/booksReserve/listBook/${id}`);

        await deleteDoc(docRef);

        dispatch( deleteReserve(id));
    }
}