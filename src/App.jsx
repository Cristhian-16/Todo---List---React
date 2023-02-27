import { useState } from 'react'
import { InputTask } from './components/input-btn/InputTask'
import './App.css'
import { GridTask } from './components/grid-task/GridTask'

function App() {

  const [input, setInput] = useState([])

  const addTask = (valor) => {
    const updateValue = [{ id: Date.now(), text: valor }, ...input]

    setInput(updateValue)
  }

  const onDeleteTask = (id) => {

    const deleteTask = input.filter(task => task.id !== id)
    setInput(deleteTask)
  }

  /* Editar una tarea */


  return (
    <>
      <h1>Todo List</h1>

      {/* Input */}
      <div className='div-inputbtn'>
        <InputTask fn={addTask} />
      </div>

      {/* Mostrar Tareas */}
      <div className='container'>

        <GridTask
          tasks={input}
          fn={{ onDeleteTask }}
        />

      </div>
    </>

  )
}

export default App
