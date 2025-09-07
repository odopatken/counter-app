import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const reset = () => setCount(0) 

  return (
    <>
    <div>
      <h1>ClickCounter App</h1>
      <div className="card">
        <button onClick={decrement}>-Decrement</button>
        <button onClick={increment}>+Increment</button>
        <button onClick={reset}>Reset</button>
        <p>Count: {count}</p>
      </div>

    </div>
    </>
  )
}

export default App
