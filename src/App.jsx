import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Encryption from './pages/Encryption'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Encryption/>
    </>
  )
}

export default App
