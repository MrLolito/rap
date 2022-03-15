/* const App = () => "Hola Mundo con App Importado"

export default App
*/

import React from 'react'

import  Header  from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './components/Main'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {
  
  const persona = {
    nombre: "Lorenzo", 
    edad: "23"
  }

  return  <>
        <Header/>
        <Nav/>
        <ItemListContainer/>
        <ItemDetailContainer/>
        <Main/>
        
        
        <Footer/>
        
        
  </>
}


export default App