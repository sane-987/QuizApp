import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
import QuizElement from './QuizElement'
import "./Quiz.css"

const Quiz = () => {
    const quizdata = async() => {
        const response = await axios.post("http://localhost:5000/getQuestionAnswers", {
            testname : location.state.testname
        })
        return response.data
    }
    useEffect(() => {
        
        quizdata()
        .then((result) => {
            if (result.length == 0)
            {

            }
            setquizData(result)
        })
    }, [])

    const [quizData, setquizData] = useState([])
    const location = useLocation()
    const [active, setActive] = useState(false)
    const toggleClass = () => {
        setActive(!active)
        console.log("first")
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        //console.log("hello from submit")
        console.log(e.target[10].checked, e.target[10].value)

        let arr = []
        
        for (let ele in e.target){
            if (e.target[ele].type === "radio"){
                if (e.target[ele].checked)
                    arr.push(e.target[ele].value)        
            }
            else
                break
        }
        console.log(arr)
        const response = await axios.post("http://localhost:5000/submitAnswer", {
            useremail : localStorage.getItem("userId"),
            testType : location.state.testname,
            userChoices : arr
        })
        console.log(response.data.score)
        alert(`You Scored ${response.data.score}/50`)
        // for(let ele in e.target) {
        //     if (e.target[ele] === true) {
        //         console.log(ele)
        //         console.log(e.target[ele].value)
        //         arr.push(e.target[ele].value)
        //     }
        // }
        // console.log(arr)
    }

  return (
    <>
        <div className='quizName'><h1>Quiz Name : {location.state.testname}</h1></div>
        {
            (quizData.length > 0) ? (
                <form className='quizParent' onSubmit = {handleSubmit}>
            {
                Object.keys(quizData).map(function (_, index) {
                    return <QuizElement key = {quizData[_]["quizid"]} id = {index+1} question = {quizData[_]["question"]} choices = {quizData[_]["choices"]}/>
                })
            }
            <button type='submit'>Grade Me</button> 
        </form>
            ) : (
                <h3> No Questions for this test yet!! Contact Admin Please</h3>
            )
        }
        
    </>
  )
}

export default Quiz