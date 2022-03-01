import React from 'react';
import { useState } from 'react';
import {TiTickOutline} from "react-icons/ti";
const ListItem = (props, removeItem, index) => {
    
    return (
        <div className='list-item d-f-r'>
            <div className='d-f-col task'>
                <h2>{props.title}</h2>
                <h4>Due Date:{props.date}</h4>
                <p>{props.description}</p>
            </div>
            <TiTickOutline className="complete-icon" onClick={()=> props.removeItem()}/>
        </div>
    )
}

export default ListItem;