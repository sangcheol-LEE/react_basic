import React from 'react'
import {AvartarType} from "../../types/User";

const Avartar:React.FC<AvartarType> = ({image, isNew}) => {
   return (
      <div>
         <img
            className="photo"
            src={image}
            alt="avartar"
            />
         {isNew && <span className="new">New</span>}
      </div>
   )
}

export default Avartar
