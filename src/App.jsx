import { useState } from 'react'
import './App.css'
import Home from './jsx files/Home'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Nav/>
      <Home/>
    </div>
    </>
  )
}

export default App
