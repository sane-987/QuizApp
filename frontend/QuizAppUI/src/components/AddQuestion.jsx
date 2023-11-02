import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./Quiz.css"
import axios from 'axios'
const AddQuestion = () => {
    
    const location = useLocation()
    const [status, setStatus] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        let question = e.target[0].value
        let ansArray = []
        for(let i = 1; i < 4; i++) {
            ansArray.push(e.target[i].value)
        }
        let correctAns = e.target[4].value
        
        console.log(ansArray, correctAns)
        const response = axios.post("http://localhost:5000/admin/addQuestionAnswer",{
            testId : location.state.testId,
            question : question,
            choices : ansArray,
            correctAns : correctAns
        })
        .then((result) => {
            console.log(result)
            setStatus(result.data)
        })
        .catch((err) => console.log(err))
    }
    return (
    <>
    <h3>Adding Questions to {location.state.quizType} test</h3>
        { status ? status : ""}
    <form action="" className='quizElementAdmin' onSubmit={handleSubmit}>
        <h3>Question : <input type="text" /></h3>
        {"Options : "}
        <ul className='options'>
            <li className='optionAdmin'><input type="text" /></li>
            <li className='optionAdmin'><input type="text" /></li>
            <li className='optionAdmin'><input type="text" /></li>
            {"Correct Answer"}<li className='optionAdmin'><input type="text" /></li>
        </ul>
        <button>Submit</button>
    </form>
    
    </>
  )
}

export default AddQuestion