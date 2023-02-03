import { Mentor, Persons } from './../types/Pointer';
import { Actions } from '../types/FunctionType';

export interface PersonReducer {
   (person:Persons, action:Actions) : Persons
}


export const personReducer:PersonReducer = (person , action) => {
   console.log("person",person)
   switch(action.type) {
      case "UPDATE" : {
        const {prev, current} = action;
        return {
           ...person,
           mentors : person.mentors?.map((mentor:Mentor) => {
              if(mentor.name === prev) {
                 return {...mentor, name : current}
              }
              return mentor
           })
        }
      }

      case "ADD" : {
         const {name , title } = action;
         return {
            ...person,
            mentors: [...person.mentors, {name ,title}]
         }
      }

      case "DELETE" : {
         const {name} = action;
         return {
            ...person,
            mentors : person.mentors?.filter((mentor:Mentor) => mentor.name !== name)
         }
      }
      default : {
         throw Error(`알 수 없는 액션 타입이다. ${action.type}`)
      }
   }
}