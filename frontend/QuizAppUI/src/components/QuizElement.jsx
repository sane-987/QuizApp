import React, { useState } from 'react'
import "./Quiz.css"
const QuizElement = (props) => {

    
    const {id, question, choices} = props
    let choicesArr = choices.split(",")
    const [active, setActive] = useState(false)
    const selectItem = (e) => {
        //e.target.classList.toggle("active")
        //console.log("first")
    }

  return (
    <div className='quizElement'>
            <h3>Question {id} : {question}</h3>
            <ul className='options'>
                {
                    Object.keys(choicesArr).map((_, i) => {
                        return (
                            <>
                                <li className ="option" onClick={selectItem}>
                                    <input type="radio" name = {question} value={i} required/>
                                    <label htmlFor="">{choicesArr[_]}</label>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
    </div>
  )
}

export default QuizElement