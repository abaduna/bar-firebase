import  {ref,uploadBytes,listAll,getDownloadURL } from "firebase/storage"
import { v4} from "uuid" 
import { storage } from "../confic/firebase"
export const useGetUrl=async(SetUrl,imageUpLoading,setImageUpLoading)=>{
    const imageRef = ref(storage, `menucarta/${imageUpLoading.name + v4()}`)
    await uploadBytes(imageRef,imageUpLoading).then((snaphost)=>{
        getDownloadURL(snaphost.ref).then((url)=>{
             SetUrl(url)
            console.log(url);
        })
        
      })
    
}