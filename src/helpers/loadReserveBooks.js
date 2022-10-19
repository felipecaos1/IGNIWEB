import { collection, getDocs } from "firebase/firestore/lite"
import { FireBaseDB } from "../firebase/config"


export const loadreserveBooks = async(uid='')=>{
   
    const collectionRef = collection(FireBaseDB,`${uid}/booksReserve/listBook`);

    const docs = await getDocs(collectionRef);

    const booksReserve =[];
    docs.forEach( doc=>{
        booksReserve.push({id:doc.id,...doc.data()})
    })

 return booksReserve;
}