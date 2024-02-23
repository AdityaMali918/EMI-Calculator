import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './Component/Component1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500">
        EMI CALCULATOR
      </h1>
      <Component1/>
    </>
  )
}

export default App
