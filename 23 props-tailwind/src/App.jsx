import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  const [count, setCount] = useState(0)
  
  let myObj = {
    name: "Ramavtar",
    age: 23
  }

  return (
    <>
      <h1>Tailwind</h1>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-6">
        Hello my Tailwind!
      </h1>

      <Card userName="random" btnText="Visit Profile" passedObj={myObj} />
      <Card userName="RaMemory" btnText="Visit" />

    </>
  )
}

export default App
