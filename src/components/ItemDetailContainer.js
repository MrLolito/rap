import React, { useEffect, useState } from 'react'
import { traerObjetos, productosA } from './MockProducts'
import { producto1 } from './MockProducts'

export const ItemDetailContainer = (props) => {
    const[productos,setProductos] = useState([])
    useEffect(()=>{
        const newProduct1 = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(producto1)
            },2000)
        })
        newProduct1.then((resultado)=>{
            setProductos(resultado)
        })
    },[])
    
    return (
        <div>
            <h2> Mas Informacion de {productos.nombre}</h2>
            <h3> {productos.nombre} es hermetica e insonora al 100%.</h3>
            <h5> Tiene un valor de {productos.precio}</h5>
        </div>
    )
}

export default ItemDetailContainer;