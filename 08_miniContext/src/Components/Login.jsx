import React,{ useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setuser}= useContext(UserContext);

    const handleSubmit= (e)=>{
        e.preventDefault();

        setuser( {Username, Password});
    }
  return (

    <div>
        <h2>Login</h2>
        <input type="text"
        value={Username}
        onChange={ (e)=> { setUsername(e.target.value) }}
          placeholder='Username' />

        <input type="text"
        value={Password}
        onChange={ (e)=> { setPassword(e.target.value) }}
         placeholder='Password' />

        <button onClick={ handleSubmit}>Submit</button>
    </div>
  )
}

export default Login