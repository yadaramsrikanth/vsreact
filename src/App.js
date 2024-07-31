import React from 'react';

import {useState} from "react"
import "./App.css"

const App =()=>{

  const [username,setusername]=useState("")
  const [userpassword,setuserpassword]=useState("")
console.log(username,userpassword)
  const onSubmitForm=(event)=>{
      event.preventDefault()
  }

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
<label className="lable-element" htmlFor="username">Username</label>
<input type="text" id="username" placeholder="Enter user name..." className="input-element" onChange={onChangeusername}/>
<label className="lable-element" htmlFor="password">Password</label>
<input type="password" id="password" placeholder="Enter user password..." className="input-element" onChange={onChangepassword}/>
<button type="submit">Login</button>
</form>

</div>

  </div>
}

export default App