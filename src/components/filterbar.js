import React from 'react'
import { useState } from 'react'
import {GrAdd} from "react-icons/gr"
import {BiDotsVertical} from "react-icons/bi"
const FilterBar = (props, addTask) => {
    return (
        <div className='d-f-r filter-bar'>
            <h3>Sort</h3>
            <select className='select-box' name ="sort" id="parameters">
                <option>Sort By:</option>
                <option value="alphebatical">Alphabetical</option>
                <option value="Closest">Due Date: Closest</option>
                <option value="Furthest">Due Date: Furthest</option>
            </select>
            <button className='btn' onClick={()=> props.addTask()}>Add Task</button>
            <BiDotsVertical className='icon-dots'/>
        </div>
    )
}

export default FilterBar;