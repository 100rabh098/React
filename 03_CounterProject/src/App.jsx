import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //use state  hook
  let [counter,setindex]=useState(15)    //use state return array first index:variable second: counter

  // let counter= 5

  const addvalue =() =>{
    // console.log('Clicked', Math.random())
    
    setindex(counter+1)
    
    //ui updation ko react control karta h

  }

  const removeValue =()=>{

      setindex(counter-1);
  }
  return (
    <>
     <h1>Current Count : {counter}</h1>

     <button onClick={addvalue}>Add Value {counter} </button>
     <br />
     <button onClick={removeValue} >Remove Value {counter} </button>
    </>
  )
}

export default App
