import React from "react";
import Profile from "./components/Profile";
import { User } from "./types/User";

const AppProfile:React.FC = () => {

  const UserInformation:User[] = [
    {
      name : "Kim",
      title : "개발자",
      image : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name:"Lee",
      title:"디자이너",
      image:"https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      isNew : true,
    },
    {
      name:"Khen",
      title:"보건 관리자",
      image:"https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    }
  ]


  return (
    <div>
       {UserInformation.map((item:User) => (
         <Profile name={item.name} title={item.title} image={item.image} isNew={item.isNew}/>
       ))}
    </div>
  )
}


export default AppProfile
