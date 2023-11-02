import React from 'react'
import { useState } from 'react'
import "./QuizMenu.css"
import { useLocation, useNavigate } from "react-router-dom"
const QuizMenu = (props) => {
    const {role} = props
    const navigate = useNavigate()
    const location = useLocation()
    const [open, setOpen] = useState(false);
    
    

    const handleOpen = () => {
        setOpen(!open)
    }
    const handleClick = (e) => {
        e.preventDefault()
        //console.log(location.state.role)
        navigate("/Quiz", {
            state : {
                testname : e.target.innerHTML.toLowerCase()
            }
        })
    }
  return (
    <>
        <div className='dropdown'>
        <button onClick={handleOpen}>
            Select Quiz
        </button>
        {
            open ? (
                <ul className='menu'>
                    <li className='menu-item' onClick={handleClick}>
                        <button>English</button>
                    </li>
                    <li className='menu-item' onClick={handleClick}>
                        <button >Marathi</button>
                    </li>
                    <li className='menu-item' onClick={handleClick}>
                        <button>Hindi</button>
                    </li>
                    
                </ul>
            ) : null
        }
        
        </div>
    </>
  )
}

export default QuizMenu