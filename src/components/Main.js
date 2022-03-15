import React from 'react'

// CONTADOR 
import { useState } from 'react'
import { Container } from 'react-bootstrap'

const Main = (props) => {

    //let contador= 0
    /* const resultado= useState()
    const estado= resultado[0]
const setEstado= resultado[1] */

const inicial = 5
const stock = 10

let [estado, setEstado] = useState(inicial)

const handleSumar = () => {
  //estado++
  //estado = estado + 1
  //setEstado(estado++)
  if(estado < stock){
    setEstado(estado + 1)
  }
}

const handleRestar = () => {
  setEstado(estado - 1)
}

const handleResetear = () => {
  setEstado(0)
}




return (
   <Container as="main">
     <h2>Bienvenido!</h2>
     <p>Mi Contador va: {estado}</p>
     <button onClick={handleSumar}>sumar</button>
     <button onClick={handleResetear}>resetear</button>
     <button onClick={handleRestar}>restar</button>
     </Container>
);
}
// FIN CONTADOR!
export default Main;

