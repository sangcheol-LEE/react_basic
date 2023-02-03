import { UserInfo,Actions } from "../types/UserInfo"



export interface userReducerType {
   (initialState:UserInfo, action : Actions) : UserInfo
}


export const userReducer:userReducerType = (state, action):UserInfo => {
   switch(action.type) {
      case "name" : {
         const {type, value} = action;
         return {
            ...state,
            [type] : value
         }
      }
      case "email" : {
         const {type, value} = action;
         return {
            ...state,
            [type] : value
         }
      }
      case "clean" : {
         return {
            ...state,
            name: "",
            email : ""
         }
      }
      default : {
         throw Error(`알 수 없는 액션 타입이다. ${action.type}`)
      }
   }
}