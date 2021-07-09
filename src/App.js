import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

import './index.css';

function App() {
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

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter(e => e.id !== id))
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No Tasks To Show') }
    </div>
  )
}

export default App;
