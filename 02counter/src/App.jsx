import { useState } from 'react'
//imported useState 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState function returns an array which contains two values, the current state value and a function that lets you update it. Overall it used to create dynamic UI.
  //More info: https://react.dev/reference/react/useState
const [counter, setCounter] = useState(3);
const addValue = ()=> {
  setCounter(counter+1)
  console.log("clicked", counter);
}
const removeValue = ()=>{
  setCounter(counter-1)
}
  return (
    <>
    <h1>Chai aur code || React Series</h1>
    <h2>Counter Value: {counter}</h2>
    
    <button onClick = {addValue}>Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
