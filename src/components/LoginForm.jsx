import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Notification from "./Notification.jsx";
import './styles/loginForm.css'

export default function LoginForm () {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      })

      if (!res.ok) {
        setErrorMessage('Invalid Username or password.')
      }
      else {
        const userData = await res.json()

        window.localStorage.setItem(
          'loggedTattooApp', JSON.stringify(userData)
        )
        setUser(userData)
        setUsername('')
        setPassword('')
        navigate('/')
      }

      
    // eslint-disable-next-line no-empty
    } catch (e) { 
      setErrorMessage('An error has ocurred. Please, try again later.')
     }
  }
  return (
    <div className="FormWrapper" onSubmit={handleLogin}>
      <p className='FormTitle'>Login</p>
      <form className="Form" >
        <input type="text" placeholder="Username" name="username" id="username" onChange={(e) => handleUsernameChange(e)}></input>
        
        <input type="password" placeholder="Password" name="password" id="password" onChange={(e) => handlePasswordChange(e)}/>
        <button type="submit">Login</button>
      </form>

      <Notification message={errorMessage}></Notification>

    </div>
  )
}