// import Child from './components/Child'
import Child1 from './components/Child1'
import { useState } from 'react';

function App() {
//  const data = "Hello from parent";

const [data,setData]=useState("Hello from parent");

  return (
    <>
    {/* <Child message={data}/> */}
    <Child1 message={data}/>
      
    </>
  )
}

export default App
