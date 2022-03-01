import React, { useEffect } from 'react'
import { useState } from 'react'
import ListItem from "../components/subComponents/ListItem.js";
import FilterBar from './filterbar.js';
import taskData from "../taskData.js";
import AddNewTask from "./addNewTask.js"
const MainContent = () => {
    const [tasks, setTasks] = useState(taskData);
    const [newTask, setNewTask] = useState(true);
    const addTask = ()=> {
        setNewTask(true)
    }
    const cancelTask =()=> {
        setNewTask(false)
    }
    
    useEffect(()=> {
        
    },[tasks])
    
    if(newTask) {
        return (
        <AddNewTask  cancelTask={cancelTask}/>
        )
    }
    return (
        <div className='main-content'>
            <FilterBar addTask={addTask}/>
            <div>
                {tasks.map((task,index)=> {
                    const {title, date, description} = task;
                    const removeItem = (item)=> {
                        const newList= tasks.filter((tasks)=> tasks.title !== title)
                        setTasks(newList)
                        console.log(newList, title)
                    }
                    return (
                        <ListItem key={index}title={title} date={date} description={description} removeItem={removeItem}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MainContent;