import './App.css'
import { todoAtomFamily } from './atoms/todoatoms';
import { RecoilRoot,useRecoilValue } from 'recoil';

function App() {

  return (
    <RecoilRoot>
        <Todo id = {1} />
        <Todo id = {2} />
    </RecoilRoot>
  )
}

function Todo({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id));
  return (
    <>
      {currentTodo.title};
      {currentTodo.description};
    </>
  )
}

export default App
