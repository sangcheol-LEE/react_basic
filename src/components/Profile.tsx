import React from 'react'
import "../App.css";
import {User} from "../types/User"


const Profile:React.FC<User> = ({name, title, image}) => {
   return (
      <div className="profile">
         <img
            className="photo"
            src={image}
            alt="logo"
            />
         <h1>{name}</h1>
         <p>{title}</p>
      </div>
   )
}

export default Profile
