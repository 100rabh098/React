import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  
  const [themeMode, setThemeMode]= useState("light");

  const lightTheme= ()=>{
    setThemeMode("light");
  }

  const darkTheme= ()=>{
    setThemeMode("dark");
  }

  useEffect(() => {
    const changeIn= document.querySelector('html')

    changeIn.classList.remove("light","dark") 

    changeIn.classList.add(themeMode)
  }, [themeMode])
  

  return (
 <ThemeProvider value= {{themeMode, lightTheme, darkTheme}} > 
<div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
        </div>
  </div>

  </ThemeProvider>  
            
  )
}

export default App
