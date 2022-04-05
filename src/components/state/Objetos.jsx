import React from 'react'
import { useState } from 'react'

const initialProduct = {
    title:"React",
    description:"Libro de Programación",
    image:{
        url:"https://cdn-icons-png.flaticon.com/512/2292/2292038.png"
    }
}


const Objetos = () => 
{
  const [objProduct, setObjProduct] = useState(initialProduct)

  const {title, description,image,precio} = objProduct

  const handleUpdateItem = () => {
      setObjProduct({
            ...initialProduct,
            precio:"$2000"
      })
  }
  const handleUpdateProduct = () => {
      setObjProduct({
        title:"Laravel",
        description:"Libro de Desarrollo Web",
        image:{
            url:"https://cdn-icons-png.flaticon.com/512/1792/1792525.png"
        }
      })
  }

  const handleUpdateNameProduct = (property,value) =>{
      setObjProduct({
          ...objProduct,
          [property]:value
      }
      )

  }
  return (
    <>
    <div className="container mt-4">
      <h1 className="mb-4 text-2xl">Product App 🐱‍👤🐺</h1>
      <hr />
      <div className="text-center">
      <h2 className="mt-4 mb-4">El valor del objeto es:</h2>
      <pre>{JSON.stringify(objProduct,null,10)}</pre>
      <button className="btn btn-success mb-4" onClick={handleUpdateItem}>Actualizar Item</button>
      <button className="btn btn-danger mb-4 ms-4" onClick={handleUpdateProduct}>Actualizar Producto</button>
      <button className="btn btn-warning mb-4 ms-4" onClick={()=>handleUpdateNameProduct('title',"Java")}>Actualizar Nombre</button>
      <h3>Datos del Producto</h3>
      </div>
      <div className='flex mt-5 justify-evenly'>
      <img src={image.url} style={{width:50}}></img>
      <p>Nombre: {title}</p>
      <p>Descripción: {description}</p>
      {precio && <p>Precio:{precio}</p> }
      </div>
    </div>
  </>
  )
}

export default Objetos