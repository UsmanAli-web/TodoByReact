import './Todo.css'
import { useState, type ChangeEvent, type FormEvent } from 'react'
const Todo = () => {
const [task, setTask] = useState('')

const onChange = ((event: ChangeEvent<HTMLInputElement>) => {
  setTask(event.target.value)
})

const onSubmit = ((event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  if (!task.trim()) {
    return alert('Please enter a TODO')
  }
  setTodo([...todos, task]) 
  setTask('')


if (editIndex !== null) {
  const updatedTodos =[...todos]
  updatedTodos[editIndex] = task
  setTodo(updatedTodos)
  setEditIndex(null)
} else {
  setTodo([...todos, task])
}
setTask('')


})




  const [todos, setTodo] = useState([
    'Go to gym', 'Buy a new laptop', 'Finish the React App'
  ])

  const onDeleteTask = (text: string) => {
    const deleteTodo = todos.filter((todo) => (todo !== text))
    setTodo(deleteTodo);
  }

 const [editIndex, setEditIndex] = useState<number | null>(null)


const onEditTask = (index: number) => {
setTask(todos[index])
setEditIndex(index)
}

  return (
    <div className='todo-wrapper'>
    <div className="todo-container">
      <form className="todo-form" onSubmit={onSubmit}>
        <label htmlFor="task">{editIndex !== null? 'Edit your todo': 'Add a New Task'}</label>
        <input type="text" id="task" placeholder="What do you want to do" value = {task} onChange = {onChange} />
        <button type="submit">{editIndex !== null? "Update" : "Submit"}</button>
      </form>
{ todos.length > 0 ?
      <ul className="todo-list" >
        {todos.map((todo, index) => (
          <li>{todo}<button onClick = {() => onDeleteTask(todo)} >Delete</button><button onClick={() => onEditTask(index)}>Edit</button></li> 
        ))}
      </ul> : <p>Please Add some Todos</p>}
    </div>
    </div>
  )
}

export default Todo