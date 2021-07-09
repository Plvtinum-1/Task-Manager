import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


import './index.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Friday 9th July At 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Soccer Match',
      day: 'Satuday 10th July At 8:30am',
      reminder: true
    },
    {
      id: 3,
      text: 'Meething with Friends',
      day: 'Sunday 11th July At 7:30pm',
      reminder: false
    }
])

//Add Task
const addTask = (e) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...e}
  setTasks([...tasks , newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter(e => e.id !== id))
}
//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map(e => e.id === id ? { ...e, reminder: !e.reminder } : e))
} 

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}
      />) : ('No Tasks To Show') }
    </div>
  )
}

export default App;
