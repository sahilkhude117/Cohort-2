import { useState } from 'react'
import './App.css'
import { CountContext } from './Context';
import { useContext } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/> 
      </CountContext.Provider>  
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Button setCount={setCount}/>
  </div>
}

function CountRenderer(){
  const count = useContext(CountContext);
    return <div>
      {count}
    </div>
}

function Button(setCount){
  const count = useContext(Count);
  return <>
      <button onClick={() => {
          setCount(count + 1)
      }}>Increase</button>

      <button onClick={() => {
          setCount(count - 1)
      }}>Decrease</button>
  </>
  
}

export default App
