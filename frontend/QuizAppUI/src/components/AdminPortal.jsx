import React, { useState } from 'react'
import "./Quiz.css"
import { useLocation, useNavigate } from "react-router-dom"

const AdminPortal = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [quizType, setquizType] = useState(null)
    const quiztypes = ["English", "Marathi", "Hindi"]
    const handleSubmit = (e) => {
      e.preventDefault()
      if(quizType !== null) {
        navigate("/addQuestions", {
          state : {
            testId : quizType + 1,
            quizType : quiztypes[quizType]
          }
        })
      }
    }
  return (
    <>
    <h1>Welcome Admin</h1>
    <h2>Select Quiz to add up questions</h2>
    <form action="" onSubmit = {handleSubmit} className='quizElement'>
      <ul className='options'>
        {
          quiztypes.map((ele, index) => {
            return (
              <>
              <li className='option'>
                <input
                type = "radio"
                checked = {index === quizType}
                onChange = {() => setquizType(index)}
                name = "quizType"
                />
                <label htmlFor="">{ele}</label>
              </li>
              </>
              
            )
          })
        }
      </ul>
      <button type='submit'>Next</button>
    </form>
    </>
  )
}

export default AdminPortal