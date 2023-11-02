import React from 'react';
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginRegister.css"

function Register (){
  const navigate = useNavigate()
  const [usernameReg, setusernameReg] = useState("")
  const [passwordReg, setpasswordReg] = useState("")
  const [emailReg, setemailReg] = useState("")
  const [status, setStatus] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/register", {
      username : usernameReg,
      email : emailReg,
      password : passwordReg
    }).then((response) => {
      if(response){
        setStatus(response.data)
        navigate("/")
      }
    })
    .catch((err) => {
      if(err)
        setStatus("Error!")
    })
  }


  return (
    <div className="registerdiv">
        <p>{status}</p>
        <h2>Register</h2>
        <form action="" method="POST" className='registerform' onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder='Enter username' onChange={(e) => {
              setusernameReg(e.target.value)
            }}/>
            <input type="email" name="email" placeholder='Enter email' onChange={(e) => {
              setemailReg(e.target.value)
            }}/>
            <input type="password" placeholder='Enter password' onChange={(e) => {
              setpasswordReg(e.target.value)
            }}/>
            <button>Register</button>
        </form>
        <p>Already a user? <a href="/">Login</a></p>
    </div>
  )
}

export default Register;