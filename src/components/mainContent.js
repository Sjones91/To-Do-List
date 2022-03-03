import React, { useEffect } from 'react'
import { useState } from 'react'
import ListItem from "../components/subComponents/ListItem.js";
import FilterBar from './filterbar.js';
import taskData from "../taskData.js";
import AddNewTask from "./addNewTask.js"
import TaskItem from "./addNewTask"
const MainContent = () => {
    const [tasks, setTasks] = useState(taskData);
    const [newTask, setNewTask] = useState(false);
    const [NewItem, setNewItem] = useState();
    const addTask = ()=> {
        setNewTask(true)
    }
    const cancelTask =()=> {
        setNewTask(false)
    }
    // const updateList = ()=> {
    //     setTasks(...tasks, NewItem)
    // }
    const handleSubmit = (taskItem)=> {
        setTasks({...tasks, taskItem})
        console.log(taskItem)
        setNewTask(false)
    }
    useEffect(()=> {
        // updateList()
    },[NewItem])


    if(newTask) {
        return (
        <AddNewTask handleSubmit={handleSubmit} cancelTask={cancelTask}/>
        )
    }
    return (
        <div className='main-content'>
            <FilterBar addTask={addTask}/>
            <div>
                {tasks.map((task)=> {
                    const {title, date, description} = task;
                    const removeItem = (item)=> {
                        const newList= tasks.filter((tasks)=> tasks.title !== title)
                        setTasks(newList)
                        console.log(newList, title)
                    }
                    return (
                        <ListItem title={title} date={date} description={description} removeItem={removeItem}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MainContent;