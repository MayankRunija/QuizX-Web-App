import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router';
import LoginPage from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import axios from 'axios';
import Quiz from '../Pages/Quiz/Quiz';

const Protected = () => {
 const token = localStorage.getItem('token');

 const [questions, setQuestions] = useState();
 const [name, setName] = useState();
 const [score, setScore] = useState(0);

 const fetchQuestions = async (category = "", difficulty = "") => {
   const { data } = await axios.get(
     `https://opentdb.com/api.php?amount=10${
       category && `&category=${category}`
     }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
   );

   setQuestions(data.results);
 };

 
  return (
      token? <Home
      name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}/> : <Navigate to = "/login"/>
  )
}

export default Protected;
