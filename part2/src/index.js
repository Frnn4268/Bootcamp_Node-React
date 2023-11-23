import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';

const WarningNotUsed = () => {
    return <h3>The counter has not been used yet.</h3>
}

const ListOfClicks = ({ clicks }) => {
    /* debugger; //Using debugger  */
    return <p>{clicks.join(', ')}</p>
}

const INITIAL_STATE = {
    left: 0,
    right: 0,
    message: 'This is a message from the state!'
}

const App = () => {
    /* Code atomicity
    const [left, setLeft] = useState(0) 
    const [right, setRight] = useState(0) */

    const [counters, setCounters] = useState (INITIAL_STATE)

    const [clicks, setClicks] = useState ([])
    
    const handleClickLeft = (event) => { 
        event.preventDefault()

        const newCounterState = {
            ...counters,
            left: counters.left + 1,
        }
        setCounters(newCounterState)
        setClicks(prevClicks =>   ([...prevClicks, 'L']))
    }

    const handleClickRight = (event) => {
        event.preventDefault()

        const newCounterState = {
            ...counters,
            right: counters.right + 1,
        }
        setCounters(newCounterState)
        setClicks(prevClicks =>   ([...prevClicks, 'R']))
    }

    const handleReset = () => {
        setCounters(INITIAL_STATE)
        setClicks([])
    }

    return (
        <>
            <div>
                <h1>Right and Left Counter</h1>
                {counters.left}
                <button onClick={handleClickLeft}>
                    Left
                </button>
                <button onClick={handleClickRight}>
                    Right
                </button>
                {counters.right}
                <p>Total Clicks: {clicks.length}</p>
                <p>{counters.message}</p>

                {clicks.length === 0 ? (
                <WarningNotUsed />
                ) : (
                <ListOfClicks clicks={clicks} />
                )}
                <p>
                    <button onClick={handleReset}>
                        Reset
                    </button>
                </p>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
