import React, { useState, useEffect } from 'react';
import './App.css';
import Example from './Example1'
import logo from './Images/logo.svg'
import SearchInput from './SearchInput'
import RepList from './RepList'
import PaginatedItems from './Paginate1'
import Profile from './Profile1'

function App() {
    const [username, setUsername] = useState("");
    const [profInfo, setProfInfo] = useState([]);


    const setSearch = (x) => {
        setUsername(x);
    }

    const pushProfInfo = (x) => {
        setProfInfo(x);
    }
   // let nameClass = (profInfo.public_repos && proInfo.public_repos > 0) ? "main" : "main_empty"

    if (username != "")
        return (
            <div className="App" >
                <header className="App-header">
                    <div className="header">
                  <img src={logo} className="App-logo" />
                        <SearchInput setSearch={setSearch} />
                        </div>
                  <div className="divider"> </div>
              </header>
                <div className="main">
                  <Profile profData={profInfo} />
                  <Example username={username}  pushProfInfo={pushProfInfo} />
                  <PaginatedItems profData={profInfo} itemsPerPage={4} />
              </div>
        </div>
        );
    else return (<div className="App">
        <header className="App-header">
            <div className="header">
                <img src={logo} className="App-logo" />
                <SearchInput setSearch={setSearch} />
            </div>
            <div className="divider"> </div>
        </header>

        <div className="main_null">
            <Profile profData={profInfo}/>
            <Example username={username}  pushProfInfo={pushProfInfo} />
        </div>
    </div>
    );
}

export default App;
