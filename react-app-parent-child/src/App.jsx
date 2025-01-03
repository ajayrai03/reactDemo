import { useState } from 'react'
import Card from './components/Card'
function App() {
 const [name,setName] = useState('')

  return (
    <>
    {/* sending data from parent to child */}
     <Card name={name} setName={setName} />

      {/* getting value from child to  parent */}
     {/* <p>{name}</p>    */}
     
    </>
  )
}

export default App
