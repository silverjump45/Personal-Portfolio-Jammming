import React, { useState, useCallback } from "react";
import './Searchbar.css'

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, []);

    return (
        <div className="SearchBar">
            <input placeholder="Enter a song, artist, or album" onChange={handleTermChange}/>
            <button className="SerachButton" onClick={search} >Get UP Served</button>
        </div>
    )
}

export default SearchBar;