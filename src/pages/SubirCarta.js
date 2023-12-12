import React from 'react'
import { useState } from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import { useGetUrl } from '../Hoock/useGetUrl';
import { useGetData } from '../Hoock/useGetData';
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../confic/firebase';
function SubirCarta() {
  const [title,SetTitle]= useState("")
    const [descripcion,SetDescripcion]= useState("")
    const [precio,SetPrecion]= useState("")
    const [url,SetUrl]= useState("")
    const [id,SetId]= useState("")
    const [imageUpLoading,setImageUpLoading] = useState(null)
    
    const subirData = async()=>{
      const productosCollectionRef = collection(db, "cartamenu");
      // setTimeout(async() => {

        try {
          
                
               const newData = await addDoc(productosCollectionRef, {
                    url,
                    title,
                    descripcion,
                    precio,
                });
                console.log(newData.id);
                console.log("Documento agregado correctamente");
            
        } catch (error) {
            console.error("Error al subir el documento:", error);
            console.log(error);
        }
    // }, 2000);
    }
    const useHandlerMandeDataTotal= async()=>{
      console.log(`hola`);
      console.log(title);
      console.log(descripcion);
      console.log(precio);

      await useGetUrl(SetUrl,imageUpLoading,setImageUpLoading)
      console.log(url);
      
      subirData()
      console.log(`useHandlerMandeDataTotal`);
      
      
    }
  return (
    <>
    <h1>Subir menu</h1>

    <>
     <h1>Subir Producto</h1>
    <label>Titulo </label> 
    {/* {ShowPoster && <Alert severity="success">Subiendo</Alert>} */}
    
    
    <Input
    placeholder='Titulo'
    value={title}
    onChange={(e)=>SetTitle(e.target.value)}
    type='string' 
    className='anchoDePantalla'></Input>
    <Input
    placeholder='Descripcion...'
    value={descripcion}
    onChange={(e)=>SetDescripcion(e.target.value)} 
    type='string'
    className='anchoDePantalla'></Input>
    <input type="file" className='anchoDePantalla' onChange={(e)=> setImageUpLoading(e.target.files[0])} />
    <Input
     placeholder='Precio'
     value={precio}
     onChange={(e)=>SetPrecion(e.target.value)} 
     type='number' 
     className='anchoDePantalla'></Input> 
    <Button  onClick={useHandlerMandeDataTotal} className='anchoDePantalla' variant="contained">Subir carta</Button>
    </>
    </>
  )
}

export default SubirCarta