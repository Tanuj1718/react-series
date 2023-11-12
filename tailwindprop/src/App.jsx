import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      //used self made card component
      <Card username= "tanuj" address= "Bangalore"/>
      <Card username="nainwal" address="California"/>
      <Card username= "tn" address="Delhi"/>
    </>
  )
}

export default App
