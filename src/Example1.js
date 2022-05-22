import React, { useState, useEffect } from 'react';
import loop from './Images/loop.svg'
import shoulder from './Images/user_head_top.svg'
import head from './Images/user_head.svg'



function requestUser(username) {
    return fetch("https://api.github.com/users/" + username)
        .then(response => { return response.json() })
}

const Example = ({ username, pushProfInfo }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [info, setInfo] = useState(null);
    useEffect(() => {
        requestUser(username)
            .then(data => {
                setInfo(data); setIsLoaded(true); pushProfInfo(data);
        }, error => {
            setIsLoaded(true);
            setError(error);
        })
        
    }, [username])    
    if (error) {
        return <div>Error /{error.message}/</div>;
    } else if (!isLoaded)
        return (<div>Loading... </div>)
    else if (username == "")
    {
        return (
            <div className="start">
                <img src={loop} />
                <div>
                <p> Start with searching </p>
                    <p> a GitHub user </p>
                </div>
            </div>
        );
    }
    else if (username !== "" && info.message && info.message == "Not Found")
        return (
            <div className="main_empty">
         <div className="user_logo">
            <img src={head}/>
            <img src={shoulder} />
         </div>
           <p> User not found </p>
        </div>)

}

export default Example


