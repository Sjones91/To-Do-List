import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import {MdOutlineCancel} from "react-icons/md";
const SearchBar = () => {
    const [searchOn,setSearchOn] = useState(false);
    const searchHandler = (e)=> {
        console.log(searchOn)
        if(searchOn === false) {
            setSearchOn(!searchOn);
            
        } else {
            setSearchOn(!searchOn)
        }
    }

    if(searchOn) {
        return (
            <div className='search-bar'>
                {/* <FaSearch className='search-icon' onClick={searchHandler}/> */}
                <input type="text" className='search-field'></input>
                <MdOutlineCancel className='cancel-icon' onClick={searchHandler}/>
            </div>
        )
    } else {
    return (
        <div className='search-bar'>
            <FaSearch className='search-icon' onClick={searchHandler}/>
        </div>
    )
    }
}

export default SearchBar;