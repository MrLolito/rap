import React, { useEffect, useState } from 'react'
import { traerObjetos, productosA } from './MockProducts'


export const ItemListContainer = (props) => {
    const[productos,setProductos] = useState([])
    useEffect(()=>{
        const newProducts = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosA)
            },2000)
        })
        newProducts.then((resultado)=>{
            setProductos(resultado)
        })
    },[])
    

    

    

    return (
        <div>
            <h2> Nuestras Ventanas</h2>
            <ul>
                {productos.map((item)=>{
                    return <li key={item.id}>
                        <h3>{item.nombre}</h3>
                        <p>{item.precio}</p>
                        </li>
                })}
            </ul>
        </div>
    )
}

export default ItemListContainer;