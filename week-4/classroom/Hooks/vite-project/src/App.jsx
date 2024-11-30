
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {useState} from 'react';
import axios from "axios";

function App(){
  const [selectedId,setSelectedId] = useState(0)

  return (
    <div>
      <button onClick={function(){
        setSelectedId(1);
      }}>1</button>
      <button onClick={function(){
        setSelectedId(2);
      }}>2</button>
      <button onClick={function(){
        setSelectedId(3);
      }}>3</button>
      <button onClick={function(){
        setSelectedId(4);
      }}>4</button>
      
      <Todo id = {selectedId}/>
    </div>
  )
}

function Todo({id}){
  const [todo,setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(responce => {
        setTodo(responce.data.todo)
      })
  },[id])

  return <div>
    Id:{id}
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </div>
}

export default App

