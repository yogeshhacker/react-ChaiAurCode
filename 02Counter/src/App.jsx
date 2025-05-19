import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function Increment() {
    if (count < 20) {
      setCount((count = count + 1));    }
  }
  function Decrement() {
    if (count > 0) {
      setCount((count = count - 1));
    }
  }
  function Reset() {
    setCount((count = 0));
  }
  return (
    <>
      <div className="container">
        <h1>Counter Project | Learning Hook Need</h1>
        <h2>Counter Value : {count}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
