import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//learnings: how onclick works, what is the default parameter in useState and how it works, 
function App() {
  const [color, setColor]= useState("olive")

  return (
    <div className="w-full h-screen duration-200" style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-2 rounded-xl">
          <button
          onClick={()=> setColor("red")}
          className="outline-none px-4 rounded-xl text-white shadow-lg" style={{backgroundColor: "red"}}>RED</button>

          <button
          onClick={()=> setColor("blue")}
          className="outline-none px-4 rounded-xl text-white shadow-lg" style={{backgroundColor: "blue"}}>BLUE</button>

          <button
          onClick={()=> setColor("grey")}
          className="outline-none px-4 rounded-xl text-white shadow-lg" style={{backgroundColor: "grey"}}>GREY</button>

          <button 
          onClick={()=> setColor("green")}
          className="outline-none px-4 rounded-xl text-white shadow-lg" style={{backgroundColor: "green"}}>GREEN</button>

          <button
          onClick={()=> setColor("pink")}
          className="outline-none px-4 rounded-xl text-white shadow-lg" style={{backgroundColor: "pink"}}>PINK</button>

          <button
          onClick={()=> setColor("indigo")}
          className="outline-none px-4 rounded-xl text-white shadow-lg" style={{backgroundColor: "indigo"}}>INDIGO</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
