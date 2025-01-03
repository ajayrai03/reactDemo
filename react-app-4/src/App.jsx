import React from "react"
import User from './component/User'
function App() {
  
function occupyMars(data){
  alert(data);
}
  return (
    <>
     <h1>In Parent</h1>
     <User  data={occupyMars}/>
    </>
  )
}

export default App
