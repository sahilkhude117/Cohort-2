import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import './App.css'
import { countAtom, evenSelector } from './store/atoms/Count';

function App() {
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>  
    </div>
  )
}

function Count(){
  
  return <div>
    <CountRenderer/>
    <Button/>
    <EvenCountRenderer/>
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is Even" : null}
  </div>
}

function Button(){
  const [count, setCount] = useRecoilState(countAtom);

  return <>
      <button onClick={() => {
          setCount(count + 1);
      }}>Increase</button>

      <button onClick={() => {
          setCount(count - 1);
      }}>Decrease</button>
  </>
}

export default App
