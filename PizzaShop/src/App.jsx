import './App.css'
import { PizzaProvider } from './contexts/PizzaContext'
import Receptionist from './components/Receptionist'
import Cook from './components/Cook'
import Delivery from "./components/Delivery";

function App() {

  return (
   <PizzaProvider>
      <div style={{ padding: 20 }}>
        <h1>🍕 Pizza Order Board</h1>
        <Receptionist />
        <hr />
        <Cook />
        <Delivery />
      </div>
   </PizzaProvider>
  )
}

export default App
