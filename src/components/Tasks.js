import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {  
    return (
        <>
           {tasks.map(e => <Task key={tasks.id} task={e} 
            onDelete={onDelete}
           /> )} 
        </>
    )
}

export default Tasks
