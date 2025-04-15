import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div className='w-full h-20 bg-blue-100 '>
        <ul className='gap-10 flex items-center justify-center pt-6'>
            <Link to="/create" className='cursor-pointer'>Create</Link>
            <Link to="/view" className='cursor-pointer'> View</Link>
        </ul>
    </div>
  )
}

export default Navbar