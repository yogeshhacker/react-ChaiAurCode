import './App.css'
import Nav from './Nav';
import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('#242424');

  return (
    <div style={{ minHeight: "100vh", background: bgColor }}>
      <Nav BgChanger={setBgColor} />
    </div>
  );
}

export default App;