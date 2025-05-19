import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let Number = 10;

  const Display = () => {
    return Number;
  };
  const Addtion = () => {};
  const Subtract = () => {};
  const Division = () => {};
  const Multiple = () => {};
  return (
    <>
        <h1> Creating Calculator</h1>
        <Display/>
        <div className='numPad'>
          <button>0</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>+</button>
          <button>-</button>
          <button>/</button>
          <button>*</button>
          <button>=</button>

          
        </div>

    </>
  )
}

export default App
