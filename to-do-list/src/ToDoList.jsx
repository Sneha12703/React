import React,{useState} from 'react'
export default function ToDoList(){
    const [tasks,setTasks]=useState([])
    const [newTask,setNewTask]=useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        setTasks(t => [...t,newTask]);
        setNewTask("");
     }
    function deleteTask(index){
        setTasks(t=>t.filter((_,i)=>i!==index));
    }
    function moveTaskUp(index){
        if (index>0){
            [tasks[index-1],tasks[index]]=[tasks[index],tasks[index-1]];
        }
        setTasks([...tasks]);
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            [tasks[index+1],tasks[index]]=[tasks[index],tasks[index+1]];
        }
        setTasks([...tasks]);
    }
    return(
        <>  
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task,index)=><li key={index}>
                    <span className="text">{task}</span>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                    <button onClick={() => moveTaskUp(index)}>Move Up</button>
                    <button onClick={() => moveTaskDown(index)}>Move Down</button>
                </li>)}
            </ol>
        </div>
        </>
    )
}