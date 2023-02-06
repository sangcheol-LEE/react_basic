import React,{useReducer, useState} from 'react'
import {  Mentor, Persons } from '../types/Pointer';
import { HandleDelete, HandleUpdate, HandleAdd } from '../types/FunctionType';
import { personReducer } from '../reducer/person-reducer';
import { PersonReducer } from '../reducer/person-reducer';

const AppMentors = () => {
   // const [person, setPerson] = useState<Persons>(initialState);
   const [person, dispatch] = useReducer<PersonReducer>(personReducer, initialState)

   const handleUpdate:HandleUpdate = () => {
      const prev:string | null = prompt("누구의 이름을 바꾸고 싶은가요 ?");
      const current:string | null  = prompt("이름을 무엇으로 바꾸고 싶은가요 ?");
      dispatch({ type : "UPDATE", prev, current})
   }
   const handleAdd:HandleAdd = ():void => {
      const name:string | null = prompt("멘토의 이름은 무엇입니까 ?")
      const title:string | null = prompt("멘토의 직업은 무엇입니까 ?")
      dispatch({ type : "ADD", name, title})
   }
   const handleDelete:HandleDelete = ():void => {
      const name:string|null = prompt("삭제하고 싶은 멘토의 이름은 무엇입니까 ?")
      dispatch({ type : "DELETE", name})
   }

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
         <button onClick={handleUpdate}> 멘토의 이름 바꾸기 </button>
         <button onClick={handleAdd}>멘토 추가 하기</button>
         <button onClick={handleDelete}>멘토 삭제 하기</button>
      </div>
   )
}

export default AppMentors

const initialState = {
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
}