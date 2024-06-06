import React from 'react';
import "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist.js";

const SearchResults = (props) => {
    return (
        <div className="SearchResults">
            <h1>Results</h1>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    );
};

export default SearchResults;