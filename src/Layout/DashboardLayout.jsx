import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { RiMenu2Fill } from "react-icons/ri";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex'>
      <div className='md:w-[22%] w-[60%]'>
        <button
          className="md:hidden p-4 focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
        >
          <RiMenu2Fill className=' w-7 h-7 ' />
        </button>
        <div
          className={`${isOpen ? 'block' : 'hidden'
            } md:block w-full bg-sky-600 h-screen sticky top-0 text-white flex flex-col px-2`}>

          <ul className='flex flex-col justify-between text-center md:pt-32 pt-20'>
            <li className='text-white mb-5 md:text-lg text-md '>
              <NavLink to="dashboard-home" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-800 w-auto md:px-20 px-10 py-2" : ""
              }>Dashboard</NavLink>
            </li>
            <li className='text-white mb-5 md:text-lg text-md '>
              <NavLink to="all-books" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-800 w-auto md:px-20 px-10 py-2" : ""
              }>All Books</NavLink>
            </li>
            <li className='text-white mb-5 md:text-lg text-md '>
              <NavLink to="all-reviews" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-800 w-auto md:px-20 px-10 py-2" : ""
              }>All Reviews</NavLink>
            </li>
            <li className='text-white mb-5 md:text-lg text-md '>
              <NavLink to="add" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-800 w-auto md:px-20 px-10 py-2" : ""
              }>Add Reviews</NavLink>
            </li>
            <li className='text-white mb-5 md:text-lg text-md '>
              <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-800 w-auto md:px-20 px-10 py-2" : ""
              }>Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='md:w-3/4 w-full mx-auto '>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
