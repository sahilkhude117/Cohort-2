/* eslint-disable no-unused-vars */
import React from "react";
import useState from 'react';

function App(){
  const [todos,setTodos] = useState([{
    title: "Go to Gym",
    description: "Go to Gym from 7-9",
    completed: false,
  }, {
    title: "dsa",
    description: " from 7-9",
    completed: true,
  }]);

  function addTodo(){
    setTodos([...todos, {
      title: "new Todo",
      description: "desc to new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a TODO</button>
      {todos.map((todo) => {
        // eslint-disable-next-line react/jsx-key
        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>props.title</h1>
    <h2>props.description</h2>
    </div>
}

export default App

