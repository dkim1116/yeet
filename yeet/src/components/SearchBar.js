import React from 'react';

const SearchBar = () => {
    return (
        <div class="ui loading search">
            <div class="ui icon input">
                <input class="prompt" type="text" placeholder="Search..." />
                <i class="search icon"></i>
            </div>
            <div class="results"></div>
        </div>
    );
}

export default SearchBar;