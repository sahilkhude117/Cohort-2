import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [socket,setSocket] = useState<null | WebSocket>(null);
  const [latestMessage,setLatestMessage] = useState("");
  const [message,setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000')

    socket.onopen = () => {
      console.log("Connected")
      setSocket(socket)
    }

    socket.onmessage = (message) => {
      console.log('received message : ',message.data);
      setLatestMessage(message.data);
    }

    return () => {
      socket.close();
    }

  },[])

  if (!socket){
    return <div>
      Connecting to socket server ...
    </div>
  }

  return (
    <>
      <input type="text" onChange={(e)=> {
          setMessage(e.target.value)
      }} ></input> <br />
      <button onClick={() => {
        socket.send(message)
      }}>send</button> <br />
      {latestMessage}
    </>
  )
}

export default App
