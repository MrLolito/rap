import React from "react";

export const productosA = [

    {
        "id":1,
        "nombre":"hojaDeAbrir",
        "precio":"100"
    },

    {
        "id":2,
        "nombre":"panioFijo",
        "precio":"200"
    },

    {
        "id":1,
        "nombre":"corrediza",
        "precio":"300"
    },
]

export const producto1 =  {
    "id":1,
    "nombre":"Hoja De Abrir",
    "precio":"100"
}

export const traerObjetos = new Promise ((res, rej)=>(

    setTimeout(()=>{
        res(productosA)
    }, 2000)
)

)