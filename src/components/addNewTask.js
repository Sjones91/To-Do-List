import React, { useEffect } from 'react';
import { useState } from 'react';
import {TiTickOutline} from "react-icons/ti";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import en from 'date-fns/locale/en-GB';
import tasks from '../taskData';
registerLocale('en', en)

const NewItem = (props, cancelTask, handleSubmit) => {
    const [dueDate,setDueDate] = useState("");
    const [taskItem, setTaskItem] = useState()
    const [test2, setTest2] = useState("this is a test");
    const handleDate = (e) => {
        const value = dueDate
        const dateNew = value.toString().substring(3,16);
        setTaskItem({...taskItem, date: dateNew})
    }
    const handleChange = (e)=> {
        const title = e.target.name;
        const value = e.target.value;
        setTaskItem({...taskItem, [title]: value})
    }
    
    useEffect(()=> {
        handleDate()
        console.log(taskItem)
        
    },[dueDate])
    return (
        <form className='d-f-col new-task '>
            <h2>Add a new task.</h2>
            <h3 >Enter a title.</h3>
            <input className='text-input' id="title" name="title" type="text" onChange={handleChange}></input>
            <h3>Enter a task details.</h3>
            <textarea name="description"type="text" className='text-input text-area-input' onChange={handleChange}></textarea>
            <h3>Select a due date</h3>
            <DatePicker name="date"className= "date-box"selected={dueDate} onChange={(Date) => {setDueDate(Date); handleDate(dueDate)}}/>
            <div className='d-f-r btn-div'>
                <button className="btn" type="button" onClick={()=> props.handleSubmit(taskItem)}>Add Task</button>
                <button className="btn" type='submit' onClick={()=> props.cancelTask()}>Cancel</button>
            </div>
        </form>
    )
}

export default NewItem;