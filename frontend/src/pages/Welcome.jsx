import React from 'react'
import { useNavigate } from 'react-router-dom'
const Welcome = () => {
    const navigate = useNavigate();
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-blue-300'> 
        <h1 className='font-bold text-4xl flex items-center justify-center'>Welcome to Feedback Board</h1>
        <button className='bg-blue-100 px-10 py-4 mt-5 rounded-2xl shadow-2xl hover:bg-blue-200 active:bg-blue-50' onClick={() => navigate("/create")}>Get Started</button>
    </div>
  )
}

export default Welcome