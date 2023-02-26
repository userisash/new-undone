import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Avatars from './avatar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Avatars/>
    </div>
  )
}

export default App
