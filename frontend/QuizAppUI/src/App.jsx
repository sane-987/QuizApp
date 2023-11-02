import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./components/Login"
import Register from "./components/Register"
import UserProfile from "./components/UserProfile"
import QuizMenu from "./components/QuizMenu"
import Quiz from "./components/Quiz"
import AdminPortal from './components/AdminPortal'
import AddQuestion from './components/AddQuestion'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login />}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/profile" element = {<UserProfile/>}/>
        <Route path = "/quizMenu" element = {<QuizMenu/>}/>
        <Route path = "/Quiz" element = {<Quiz/>}/>
        <Route path = "/adminPortal" element = {<AdminPortal/>}/>
        <Route path = "/addQuestions" element = {<AddQuestion/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App