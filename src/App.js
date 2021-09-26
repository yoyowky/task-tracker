import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [tasks, setTasks] = useState([]) 
  const onClickAdd = ()=>{
    setShowAddTask(!showAddTask);
  }
  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",

    });
    res.status === 200 ?
    setTasks(tasks.filter(task => task.id !== id))
    : alert('Error Deleting this task!')
  }
  const setReminder = async (e, id) => {
    if(e.target.className !== 'close'){
      // 先把该id的task找出来
      const task = await fetchTask(id);
      // 更改reminder值
      const newTask = {...task, reminder: !task.reminder};
      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(newTask)

      });
      const data = await res.json();
      setTasks(
        tasks.map(task => {
          if(task.id === id){
            return {...task, reminder: data.reminder}; // 如果id相同，改变reminder
          } else {
            return task; // 如果id不同，task保持不变
          }
        })
      )
    }
  }
  const addTask = async (task) => {
    // Frontend only:
    // const id = Math.floor(Math.random()*10000) + 1;
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks, data])
  }
  useEffect(()=>{
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data)
    };
    getTasks()
  },[])
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }
  return (
    <BrowserRouter>
    <div className="container">
      <Header title={'Task Tracker'} onAdd={onClickAdd} showAddTask={showAddTask}></Header>
      <Route 
      path='/'
      exact
      render={(props)=>(
        <>
          {showAddTask?<AddTask 
            onAdd={addTask} />:''}
          {tasks.length>0?<Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={setReminder}
          ></Tasks>
        : 'No Task'}
        </>
      )}
      />
    <Route path='/about' component={About}/>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
