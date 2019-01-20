import React from 'react';

const SearchBar = () => {
    return (
        <div className="ui loading search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search..." />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
        </div>
    );
}

export default SearchBar;