import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { RiMenu2Fill } from "react-icons/ri";


const DashboardLayout = () => {
 
  return (
    
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start">
        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
          <RiMenu2Fill className=' w-7 h-7 ' />
        </label>
        <div className='md:w-[90%] w-full mx-auto '>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className=' flex flex-col md:w-80 w-60 items-center bg-sky-600 text-center md:pt-32 pt-20 h-screen'>
          <li className='text-white mb-5 md:text-lg text-md '>
            <NavLink to="/dashboard" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-sky-800 w-auto md:px-20 px-10 py-2" : ""
            }>Dashboard</NavLink>
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

      </div >
    </div >
  )
}

export default DashboardLayout
