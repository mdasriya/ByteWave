import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../components/Login';
import SignupForm from '../components/SignupForm';
import HomePage from '../components/HomePage';
import InterviewSimulator from '../components/InterviewSimulator';
import FinishedPage from '../components/FinishedPage';
const MainRoutes = () => {
  return (
<Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/interview" element={<InterviewSimulator />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<SignupForm />}></Route>
    <Route path="/finished" element={<FinishedPage />}></Route>
</Routes>     

  )
}

export default MainRoutes
