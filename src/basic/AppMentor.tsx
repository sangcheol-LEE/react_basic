import React,{useState} from 'react'
import { Person } from '../types/Pointer'
const AppMentor:React.FC = (props : any) => {

   const [person, setPerson] = useState<Person>({
      name: "ian",
      title : "FE DEV",
      mentor : {
         name : "Bob",
         title : "BE DEV"
      },
   })

   return (
      <div>
         <h1>
            {person.name} is {person.title}
         </h1>
         <p>
            {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title })
         </p>
         <button
            onClick={() => {
               const name:string | null = prompt("what is your mentor's name ?");
               setPerson((person) => ({
                  ...person,
                  mentor : {
                     ...person.mentor,
                     name,
                  }
               }))
            }}
         >멘토 이름 바꾸기</button>
         <button
            onClick={() => {
               const title:string | null = prompt("what is your mentor's title ?")
               setPerson((person) => ({
                  ...person,
                  mentor: {
                     ...person.mentor,
                     title
                  }
               }))
            }}
         >멘토 타이틀 바꾸기</button>
      </div>
   )
}

export default AppMentor
