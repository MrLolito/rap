import React from 'react'
import CardWidget from './CardWidget'

export const Nav = () => {
  return (
    <nav>
        <a href=""><span className="material-icons">
shopping_bag
</span> Shop</a>
        <a href=""><span className="material-icons">
savings
</span> Ofertas </a>
        <a href=""> <CardWidget/> Carrito</a>
    </nav>
  )
}
export default Nav