import { useState } from "react"


function App() {
  
  let [color, setcolor]= useState("olive")

  return (
  
      <div className="w-full h-screen" 
      style={{backgroundColor: color}}
      >
        
        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">

        <div className="fixed flex flex-wrap justify-center gap-2
            shadow-lg bg-white px-3 py-2 rounded-xl">
              
              <button
              onClick={()=> setcolor("red")}
              className="outline-none rounded-full px-4 py-2 text-white shadow-lg"
              style={{backgroundColor: "red"}}
              >Red</button>

<button 
onClick={()=> setcolor("green")}
className="outline-none rounded-full px-4 py-2 text-white shadow-lg"
              style={{backgroundColor: "green"}}
              >Green</button>

<button onClick={()=> setcolor("blue")}
 className="outline-none rounded-full px-4 py-2 text-white shadow-lg"
              style={{backgroundColor: "blue"}}
              >Blue</button>

<button onClick={()=> setcolor("pink")} 
className="outline-none rounded-full px-4 py-2 text-white shadow-lg"
              style={{backgroundColor: "pink"}}
              >Pink</button>

<button onClick={()=> setcolor("grey")}
 className="outline-none rounded-full px-4 py-2 text-white shadow-lg"
              style={{backgroundColor: "grey"}}
              >Grey</button>
        </div>
        </div>
      </div>
    
  )
}

export default App
