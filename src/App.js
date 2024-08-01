import React from 'react';

import {useState,useEffect} from "react"
import "./App.css"

const App =()=>{

  const [username,setusername]=useState("")
  const [userpassword,setuserpassword]=useState("")
 

  const onSubmitForm=async (event)=>{
      event.preventDefault()
     
  }

const getData=async()=>{
  const api=await fetch("https://login-user-details.vercel.app/")
  const apiresponse=await api.json()
  console.log(apiresponse)
  
}

  useEffect(()=>{
    getData()
  },[])







  



  const onChangeusername=(event)=>{
      setusername(event.target.value)
      
  }

  const onChangepassword=event=>{
    setuserpassword(event.target.value)
  }


  return <div className="main-login-container">
<div className="login-container">
<form className="container" onSubmit={onSubmitForm}>
  <h1 className="">LOGIN</h1>
<label className="lable-element" htmlFor="username">USERNAME</label>
<input value={username} type="text" id="username" placeholder="Enter user name.." className="input-element" onChange={onChangeusername}/>
<label className="lable-element" htmlFor="password">PASSWORD</label>
<input value={userpassword} type="password" id="password" placeholder="Enter user password.." className="input-element" onChange={onChangepassword}/>
<button type="submit">Login</button>
</form>


</div>

  </div>
}

export default App