import React, { useState, useEffect } from 'react';
import icons from './Images/full_user.svg';
import icon from './Images/half_user.svg';


const Profile = ({ profData}) => {

    let followers = profData.followers;
    if (followers > 1000) {
        followers = followers / 1000;
        followers = followers.toFixed(1) + "k";
    }

    if (profData.login)
        return (
            <div className="profile">
                <div className="photoFrame">
                    <img src={profData.avatar_url} />
                </div>
                <p> {profData.name} </p>
                <a href={profData.html_url} target="_blank"> {profData.login} </a>
                <div className="follows_info">
                    <div className="followers">
                        <img src={icons} />

                        <p>{followers} followers</p>
                    </div>
                    <div className="followings">
                        
                        <img src={icon} />
                        <p>{profData.following} following</p>
                    </div>
                </div>
            </div>
        );
    else return (<div> </div>);

}

export default Profile