import React from "react";
import { useState } from "react";

const initialCart = [
    {
        id: crypto.randomUUID(),
        title:"React",
        description:"Libro de Programación",
        image:{
            url:"https://cdn-icons-png.flaticon.com/512/2292/2292038.png"
        }
    },
    {
        id: crypto.randomUUID(),
        title:"Angular",
        description:"Libro de Frontend",
        image:{
            url:"https://cdn-icons-png.flaticon.com/512/1792/1792525.png"
        }
    }
]


const Array = () => 
{
   const [products, setProducts] = useState(initialCart)

   const handleDelete = (id) =>
   {
        const afirm = confirm("Vas a eliminar el producto del carrito?")
        if(afirm)
        {
            const productDelete = products.filter(product => product.id !== id )
            setProducts(productDelete)
        }
   }

   const handleAdd = () =>
   {
        const newProduct = {
            id: crypto.randomUUID(),
            title:"NodeJS",
            description:"Libro de Backend",
            image:{
                url:"https://cdn-icons-png.flaticon.com/512/771/771298.png"
            }
        }
        setProducts([newProduct,...products])
   }

   const handleDeleteAll = () =>
   {
        setProducts([])
   }

   const handleUpdate = (id) =>
   {
      const productFind = products.find(product => product.id === id) 
      productFind.price = "$100"
      const productUpdate = products.map(product =>{
          return product.id === id 
          ? productFind
          : product
      })
      setProducts(productUpdate)
   }

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Shopping Car App 🐱‍👤🐺</h1>
        <hr />
        <div className="text-center">
          <h2 className="mt-4 mb-4">El valor del array es:</h2>
          <pre>
          {JSON.stringify(products,null,10)}
          </pre>
          <button className="btn btn-success ms-2" onClick={()=>{handleAdd()}}>Agregar</button>
          <button className="btn btn-danger ms-2" onClick={()=>{handleDeleteAll()}}>Vaciar Carrito</button>
        </div>

        <div>
            <h2>Mi carrito de compras:</h2>
            <ul>
                {
                    products.map(product =>(
                        <div key={product.id} className="mb-4">
                            <li >{product.title}</li>
                            <p className="mb-0">{product.description}</p> 
                            <p>{product.price}</p> 
                            <img src={product.image.url} style={{width:80}}></img>
                            <button className="btn btn-danger btn-sm ms-2 mt-2" onClick={()=>{handleDelete(product.id)}}>Eliminar</button>
                            <button className="btn btn-warning btn-sm ms-2 mt-2" onClick={()=>{handleUpdate(product.id)}}>Actualizar</button>
                        </div>
                        ) 
                    )
                }
            </ul>
        </div>
      </div>
    </>
  );
};

export default Array;
