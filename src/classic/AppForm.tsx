import React,{useState,useReducer} from 'react';
import { ChangeEvent } from 'react';
import { FormEvent } from 'react';
import { UserInfo } from '../types/UserInfo';
import { userReducer,userReducerType } from '../reducer/user-reducer';

const userDatas:UserInfo = {
   name : "",
   email : ""
}


const AppForm = () => {
   const [userData, setUserData] = useState(userDatas)
   const [userInfomation, dispatch] = useReducer<userReducerType>(userReducer, userDatas)
   const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch({type: "clean"})
      console.log(userData)
   }
   console.log("gooood",userInfomation)
   const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setUserData({
         ...userData,
         [e.target.name] : e.target.value
      })
   }
   const wholeChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({type : e.target.name, value: e.target.value})
   }
   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="name">이름 :</label>
         <input type="text" id="name" name="name" value={userInfomation.name} onChange={wholeChange}/>

         <label htmlFor="email">이메일 :</label>
         <input type="email" id="email" name="email" value={userInfomation.email} onChange={wholeChange}/>
         <button>Submit</button>
      </form>
   )
}

export default AppForm


