import React from 'react'
import { useState } from 'react'
import ListItem from "../components/subComponents/ListItem.js";
import FilterBar from './filterbar.js';
import taskData from "../taskData.js"
const MainContent = () => {
    const [tasks, setTasks] = useState(taskData)
    const clickHandler = (e)=> {
        const taskList = "";
        alert("work")
    }
    return (
        <div className='main-content'>
            <FilterBar/>
            <div>
                {tasks.map((task, index)=> {
                    const {title, date, description} = task;
                    console.log(title,date,description)
                    return (
                        <ListItem key={index}title={title} date={date} description={description} clickHandler={clickHandler}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MainContent;