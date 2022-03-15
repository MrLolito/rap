//1. necesitamos la variable React en scope
import React from "react"; /*ES6 Module*/

//2. Necesitamos la variable ReactDOM en scope 
import  ReactDOM  from "react-dom";

//3. Necesitamos un componente en scope
/* function App () {
    return "Hola Mundo"
}
*/
import App from './App'
//const App = () => {
//    return "Hola Mundo"
//}
import "./estilos.css"

//4. Necesitamos poner el componente en el DOM
ReactDOM.render(<App/>,document.getElementById("root"))
