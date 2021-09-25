const Task = (props) => {
    const {task, onToggle, onDelete} = props
    return (
        <div className={`task ${task.reminder && 'reminder'}`} onClick={(e) => onToggle(e, task.id)}>
            <h3>
                {task.text}
                <div className="close" onClick={() => onDelete(task.id)}>&times;</div>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;