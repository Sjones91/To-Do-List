import React from 'react'
import { useState } from 'react'
import {GrAdd} from "react-icons/gr"
import {BiDotsVertical} from "react-icons/bi"
const FilterBar = () => {
    return (
        <div className='d-f-r filter-bar'>
            <h3>Filter</h3>
            <GrAdd className='icon-filter'/>
            <BiDotsVertical className='icon-dots'/>
        </div>
    )
}

export default FilterBar;