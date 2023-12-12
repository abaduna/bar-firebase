import {db} from "./../confic/firebase"
import { addDoc, collection, getDocs } from 'firebase/firestore'
export const useGetData =async(url,title,descripcion,precio)=>{
    const productosCollectionRef = collection(db, "carta-menu");
                console.log(url);
                console.log(title);
                console.log(descripcion);
                console.log(precio);    
    setTimeout(async(url,title,descripcion,precio) => {

        try {
          
                
                await addDoc(productosCollectionRef, {
                    url,
                    title,
                    descripcion,
                    precio,
                });
                console.log("Documento agregado correctamente");
            
        } catch (error) {
            console.error("Error al subir el documento:", error);
            console.log(error);
        }
    }, 2000);
}