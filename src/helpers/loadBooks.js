import { collection, getDocs } from "firebase/firestore/lite"
import { FireBaseDB } from "../firebase/config"

//* este archivo contiene una funcion que se encarga de traer de la base de datos todos los libros disponibles para reservar

export const LoadBooks = async()=>{

    const collectionRef = collection(FireBaseDB,`global/allBooks/books`);

    const docs = await getDocs(collectionRef);

    const books =[];
    docs.forEach( doc=>{
        books.push({id:doc.id,...doc.data()})
    })

 return books;
}