import React from 'react';
import { useState } from 'react';
import {TiTickOutline} from "react-icons/ti";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import en from 'date-fns/locale/en-GB';
registerLocale('en', en)

const NewItem = (props, cancelTask) => {
    const [dueDate,setDueDate] = useState("");
    const newDate = dueDate.toString().substring(3,16);
    const [taskItem, setTaskItem] = useState({
        title: "",
        description: "",
        date: dueDate.toString().substring(3,16)
    })
    const handleSubmit= ()=> {
        setTaskItem(taskItem.title= "fdfd", taskItem.description="fdfd", taskItem.date= newDate )
        prevent
    }
    console.log(taskItem)
    return (
        <form className='d-f-col new-task '>
            <h2>Add a new task.</h2>
            <h3 >Enter a title.</h3>
            <input className='text-input' id="title" type="text"></input>
            <h3>Enter a task details.</h3>
            <textarea type="text" className='text-input text-area-input'></textarea>
            <h3>Select a due date</h3>
            <DatePicker className= "date-box"selected={dueDate} onChange={(Date) => setDueDate(Date)}/>
            <div className='d-f-r btn-div'>
                <button className="btn" onClick={handleSubmit}>Add Task</button>
                <button className="btn" type='submit' onClick={()=> props.cancelTask()}>Cancel</button>
            </div>
        </form>
    )
}

export default NewItem;