import React from 'react'
import "../App.css";
import {User} from "../types/User"
import Avartar from './Avartar';

const Profile:React.FC<User> = ({name, title, image, isNew}) => {
   return (
      <div className="profile">
         <Avartar image={image} isNew={isNew}/>
         <h1>{name}</h1>
         <p>{title}</p>
      </div>
   )
}

export default Profile
