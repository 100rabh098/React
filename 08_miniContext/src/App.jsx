import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {


  return (
      <UserContextProvider>
          <Login/>
          <Profile/>
      </UserContextProvider>
  )
}

export default App
