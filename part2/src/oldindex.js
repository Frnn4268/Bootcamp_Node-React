import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';

const Display = ({ number }) => { //Display render
  return <h2>The value is: {number}</h2>
}

const App = (props) => {
  const [counterValue, updateCounter] = useState(0)

  /* This is the same 
  const counter = useState(0)
  const counterValue = counter[0]
  const updateCounter = counter[1]
  */

  const handleClick = (action) => {
    switch(action) {
      case 'increment':
        //This is a way to do that
        updateCounter(counterValue + 1) 

        /*  updateCounter(prevCounter => { //This is another way
              return prevCounter + 1
            }) 
        */
        break;

      case 'decrement':
        updateCounter(counterValue - 1) 
        break;

      case 'reset':
        updateCounter(0)
        break;   

        default:
          break;
    }
  }

  const isEven = counterValue % 2 === 0

  return (
    <>
      <h1>Hi part2! :D</h1>
      <Display number={counterValue} />

      <p>{isEven ? "El número es par" : "El número es impar"}</p> 

      <button onClick={() => {handleClick('increment')}}>
        Increment
      </button>
      <button onClick={() => {handleClick('decrement')}}>
        Decrement
      </button>
      <button onClick={() => {handleClick('reset')}}>
        Reset
      </button>
    </>
  ) 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App initialCounter = {0} />
  </React.StrictMode>
);
