// Reads the order
import React from 'react'
import { usePizza } from '../contexts/PizzaContext'


function Cook() {
  const {order} = usePizza();

  return (
    <div>
        <h3>Cook</h3>    
        <p>Preparing: { order || "No order yet"} </p>
    </div>
  )
}

export default Cook
