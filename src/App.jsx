import { useState } from 'react';
import './App.css'

function TodoList(){
  const todos=[
    {id: 1, text:"learn REact."},
    {id: 2, text: "HEllo Ahmad."},
    {id: 3, text: "Ding work."},
  ];

  return (
    <div className="div">
      <h2>My React Todo's</h2>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}
// function Greeting({name}){
//   return <p>Hello {name} you are greatd in React!</p>
// }
// function App() {
//   const [name, setName]= useState("");

//   function handleChange(event){
//     const value =event.target.value;
//     setName(value)
//   }
  

//   return (
//     <div>
//         <input type="text" placeholder='Enter Name...' onChange={handleChange}/>
//         <p>{name}</p>
//     </div>
//   )
// }

export default TodoList;
