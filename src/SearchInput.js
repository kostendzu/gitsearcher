import React, { useState, useEffect } from 'react';
import search from './Images/search_icon.svg'

const SearchInput = ({ setSearch }) => {

    const [username, setUsername] = useState("");

    return (
        <div className="input">
            <img src={search} onClick={() => setSearch(username)} />
        <input type="text" placeholder="Enter GitHub username" value={username} onChange={(e) => setUsername(e.target.value )} />
          
        </div>
    )
}

export default SearchInput