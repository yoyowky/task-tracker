import Task from "./Task";

const Tasks = (props) => {
    const {tasks, onToggle, onDelete} = props;
    return(
    <>
    {tasks.map((task)=>(
        <Task
        key={task.id}
        task={task}
        onToggle={onToggle}
        onDelete={onDelete}
        ></Task>
    ))}    
    </>
    )
}

export default Tasks;