import React from 'react'
import { useState } from 'react'

import SearchBar from './subComponents/searchBar';
const Header = () => {
    const [toggle,setToggle] = useState(true)
    const toggleHandler = (e) => {
        if(toggle) {
            e.target.className = "toggle-ball-on";
            setToggle(!toggle)
        } else {
            e.target.className = "toggle-ball";
            setToggle(!toggle)
        }
    }
    
    return (
        <section className='head-bar d-f-r'>
            <h2>To-Do List</h2>
            <SearchBar/>
            <div className='toggle-switch'> 
                <span className='toggle-ball' onClick={toggleHandler}></span>
            </div>
        </section>
    )
}

export default Header;