// Input field to set order
import React,{useState} from 'react'
import { usePizza } from '../contexts/PizzaContext'

function Receptionist() {
  const { setOrder } = usePizza();
  const [input,setInput] = useState("");

  const handleOrder = () => {
    setOrder(input);
    setInput("");
  }
  return (
    <div>
      <h3>Receptionist</h3>
      <input 
        type='text' 
        placeholder='Enter Pizza Order'
        value={input} 
        onChange={ (e) => setInput(e.target.value)}  
        />
      <button onClick={handleOrder}>Place Order</button>
      
    </div>
  )
}

export default Receptionist
