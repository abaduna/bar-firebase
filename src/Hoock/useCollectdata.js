import {
    getDocs,
    collection,
  
    deleteDoc,
  } from "firebase/firestore";
  import {db} from "../confic/firebase"
export const useCollectData = async(setCarta)=>{
    const productosCollectionRef = collection(db, "cartamenu");
    try {
        
      const data = await getDocs(productosCollectionRef);
      
      setCarta(data.docs.map((doc) => doc.data()));
      
    } catch (error) {
      console.error(`mensaje de error ${error}`);
    }
    
}