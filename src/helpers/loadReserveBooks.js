import { collection, getDocs } from "firebase/firestore/lite"
import { FireBaseDB } from "../firebase/config"

//* este archivo contiene una funcion que se encarga de traer de la base de datos todas las reservas de cada usuario 

export const loadreserveBooks = async(uid='')=>{
   
    const collectionRef = collection(FireBaseDB,`${uid}/booksReserve/listBook`);

    const docs = await getDocs(collectionRef);

    const booksReserve =[];
    docs.forEach( doc=>{
        booksReserve.push({id:doc.id,...doc.data()})
    })

 return booksReserve;
}