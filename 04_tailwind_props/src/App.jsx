import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './componends/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-100 text-black
      mb-5'>Hello! Saurabh First React</h1>
       
       <Card username="Saurabh" btntxt="ClickMe"/>
       <Card username="Rohit" btntxt="VisitMe"/>
    </>
  )
}

export default App
