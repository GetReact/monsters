import React from 'react'
import './searchBar.css'
export const SearchBar = (props) => {
    return (
        <div className="search">
            <input type="search"
                placeholder={props.placeholder}
                onChange={props.handleChange}
            />
        </div>
    )
}
