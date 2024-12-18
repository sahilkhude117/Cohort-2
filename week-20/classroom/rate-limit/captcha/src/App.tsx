import axios from 'axios'
import './App.css'
import { Turnstile } from '@marsidev/react-turnstile'
import { useState } from 'react'

function App() {
  const [token,setToken] = useState<string>('')
  return (
    <>
      <input placeholder='OTP'/>
      <input placeholder='New Password'/>

      <Turnstile onSuccess={(e)=>{
        setToken(token);
      }} siteKey='my cloud flare key'/>

      <button onClick={() => {
        axios.post("http://localhost:3000/reset-password",{
          email: "s@gmail.com",
          otp:"123456",
          token:token
        })
      }}>Update Password</button>
    </>
  )
}

export default App
