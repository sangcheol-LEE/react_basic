import React from 'react'

interface WrapperProps {
   children : React.ReactNode
}

interface AvatarType {
   image : string;
   name : string;
   size : number;
}

const AppWrap = () => {
  return (
    <div>
       <NavBar>
            <Avatar
               image="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
               name="Bob"
               size={200}
            />
       </NavBar>
    </div>
  )
}


const NavBar:React.FC<WrapperProps> = ({children}) => {
   return (
      <header style={{backgroundColor: "yellow"}}>
         {children}
      </header>
   )
}

const Avatar:React.FC<AvatarType> = ({image, name , size}) => {
   return (
      <div>
         <img
            src={image}
            alt={`${name}`}
            style={{width: size, height: size, borderRadius:100, marginBottom: "20px"}}
         />
      </div>
   )
}

export default AppWrap
