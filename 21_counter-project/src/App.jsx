import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(13)

  // let counter = 6;

  const addValue = () => {

    if(counter >= 20){
      return
    }

    // console.log("value added", Math.random());
    // counter += 1;

    setCounter(counter + 1)
    console.log("Clicked", counter);
  } 

  const removeValue = () => {
    if(counter <= 0){
      return
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello my REACT...</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Decrease Value</button>
    </>
  )
}

export default App
