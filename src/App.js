import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: 'English',
          day: 'Feb 5th',
          reminder: true,
      },
      {
          id: 2,
          text: 'Math',
          day: 'Feb 6th',
          reminder: true,
      },
      {
          id: 3,
          text: 'French',
          day: 'Feb 5th',
          reminder: false,
      }
  ]) 
  const onClickAdd = ()=>{
    setShowAddTask(!showAddTask);
  }
  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const setReminder = (e, id) => {
    if(e.target.className !== 'close'){
      setTasks(
        tasks.map(task => {
          if(task.id === id){
            return {...task, reminder: !task.reminder}; // 如果id相同，改变reminder
          } else {
            return task; // 如果id不同，task保持不变
          }
        })
      )
    }
  }
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
      <Header title={'Task Tracker'} onAdd={onClickAdd}></Header>
      {showAddTask?<AddTask 
        onAdd={addTask}
      />:''}
      {tasks.length>0?<Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={setReminder}
      ></Tasks>
    : 'No Task'}
      
    </div>
  );
}

export default App;
