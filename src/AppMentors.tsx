import React,{useState} from 'react'
import {  Persons , Mentor } from './types/Pointer'
const AppMentors = () => {
   const [person, setPerson] = useState<Persons>(
      {
      name: "ian",
      title : "FE DEV",
      mentors: [
         {
            name : "Bob",
            title : "시니어"
         },
         {
            name : "바오밥나무",
            title : "어린왕자"
         }
      ]
   })
   return (
      <div>
         <h1>
            {person.name}는 {person.title}
         </h1>
         <p>{person.name}의 멘토는 : </p>
         <ul>
            {person.mentors?.map((mentor:Mentor, index:number) => (
               <li key={index}>
                  {mentor.name} ({mentor.title})
               </li>
            ))}
         </ul>
         <button
            onClick={() => {
               const prev:string | null = prompt("누구의 이름을 바꾸고 싶은가요 ?");
               const current:string | null  = prompt("이름을 무엇으로 바꾸고 싶은가요 ?");
               setPerson((initialState) => ({
                  ...initialState,
                  mentors: initialState.mentors?.map((mentor) => {
                     if(mentor.name === prev) {
                        return {...mentor, name : current}
                     }
                     return mentor
                  })
               }))
            }}
         >
            멘토의 이름 바꾸기
         </button>
         <button
            onClick={() => {
               const name = prompt("멘토의 이름은 무엇입니까 ?")
               const title = prompt("멘토의 직업은 무엇입니까 ?")
               setPerson((initialState) => ({
                  ...initialState,
                  mentors : initialState.mentors?.concat({name,title})
               }))
            }}
         >멘토 추가 하기</button>
         <button
            onClick={() => {
               const name = prompt("삭제하고 싶은 멘토의 이름은 무엇입니까 ?")
               setPerson((initialState) => ({
                  ...initialState,
                  mentors: initialState.mentors?.filter((mentor) => mentor.name !== name)
               }))
            }}
         >멘토 삭제 하기</button>
      </div>
   )
}

export default AppMentors
