{/*import { useState } from "react"


export default function App(){
//Lista de todos
  const {todos, setTodos} = useState([])
  const [text, setText] = useState("")

  function addTodo(){
    // todos.push(text)

    setTodos([...todos, text])
  }

  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-row gap-2 justify-center p-5">
      <input 
      type="text" 
      className="pd-2 rounded text-black w-full max-w-screen-sm"
      placeholder="Ingresa una tarea"
      value={text}
      onChange={(event)=> setText(event.target.value)}
      />
      <button className="bg-white text-black px-3 rounded"
      onClick={()=> console.log("text", text)}
      >Agregar</button>
      </div>

      <div>
        {todos.map((todo, idx)=>{
          return <div key={`todo-${idx}`}>{todo}</div>
        })}
      </div>
    </main>
  )
} 

Aqui debo averiguar cuál era mi error

*/}

import { useState } from "react"

export default function App() {
  const [todos, setTodos] = useState([]) // lista de todos 
  const [ text, setText] = useState("");

  function addTodo() {
    // todos.push(text);
    setTodos([...todos, text])
  }

  function removeTodo(indexToRemove){
    todos.splice(indexToRemove, 1)
    setTodos([...todos])
  }
  
  function onSubmit(event){
    event.preventDefault()
    addTodo()
    setText("")
  }

  return (
   
   <main className="w-full min-h-screen flex flex-col">
    <form className="flex flex-row gap-2 justify-center p-5"
          onSubmit={onSubmit}      
    >
      <input type="text" 
             className="p-2 rounded-md text-black w-full max-w-screen-sm" 
             placeholder="Ingresa una tarea" 
             value={text}
             onChange={(event) => setText(event.target.value) } 
             required
      />
      <button 
      className="bg-white text-black px-3 rounded"
      >+ Agregar </button>
    </form>
    <div className="max-w-screen-sm w-full p-4 mx-auto flex flex-col gap-1">
      {
        todos-length === 0 && <p className="text-white/50">No tienes tareas pendietes 🤷‍♀️</p>
      }
      
      {todos.length > 0 &&
      todos.map((todo, idx) => {
        return <div key={`todo-${idx}`} className="bg-white/10 rounded p-4 select-none flex flex-row justify-between">
          {todo}
            <span className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full size-8 p-1 text-center items-center" onClick={()=> removeTodo(idx)}>X
           
            </span>
          </div>
      })}</div>
    </main>
)
}