import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  
  const [length, setlength]= useState(8);

  const [numberallowed, setnumberallowed]= useState(false);

  const [charaterallowed, setcharallowed]= useState(false);

  const [Password, setPassword]= useState("");

  const passwordGenerater= useCallback( ()=>{
    let pass=""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberallowed)  str+="1234567890"
    if(charaterallowed) str+="!@#$%^&*()-+[]~"

    for(let i=1;i<length;i++)
    {
        pass+= str[ Math.floor( Math.random()*str.length +1 ) ] ;
    }

    setPassword(pass)

  }, [length, numberallowed, charaterallowed, setPassword])


  const passwordref= useRef(null);
  const copytoclipboard= useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(Password)
  },[Password])

    useEffect( ()=>{ passwordGenerater() }, [length, numberallowed, charaterallowed, passwordGenerater])


  return (
    <>
     <div className=" mx-auto my-30 shadow-md rounded-lg px-8 py-8 my-8 bg-slate-400"> 

        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">

          <input type="text" 
          value={Password}
          className="outline-none bg-white w-full py-1 px-3"
          placeholder={Password}
          readOnly
          ref={passwordref}
          />

        
          <button onClick={ copytoclipboard } className=" bg-blue-400 shadow-lg  mx-0 my-0 text-center text-black px-1 rounded-md">Button</button>
        </div>

        {/* //range */}
        <label className="bg-blue-200 mx-1 my-1 rounded-md px-1 ">
        <input  type="range" min={5} max={100} value={length}
         className="px-1 py-1 cursor-pointer"
         onChange={(e)=> {setlength(e.target.value)}} />
        length: {length}
        
        </label>
      {/* checkbox character? */}
        <label className="bg-blue-200 mx-1 my-1 rounded-md" >  <input type="checkbox" 
         onChange={ ()=>{ setcharallowed( (prev)=>!prev) } } /> Character? </label>

      {/* checkbox numberallowed? */}
        <label className="bg-blue-200 mx-1 my-1 rounded-md" >  <input type="checkbox" 
          onChange={ ()=>{ setnumberallowed( (prev)=>!prev ) }} /> Number?</label>
       
     </div>

     
    </>
  )
}

export default App
