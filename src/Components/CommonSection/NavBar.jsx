import React, { useContext, useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext)
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      menu: 'home',
      url: '/'
    },
    {
      menu: 'about',
      url: '/about'
    },
    {
      menu: 'books',
      url: '/allbooks'
    },
    {
      menu: 'reviews',
      url: '/allreviews'
    }
    

  ]
  const handleSignOut = async () => {
    await logout();
  }



  return (
    <div className="sticky top-0 max-w-full z-50">
      <div className='py-3 bg-sky-800'>
        <nav className="flex justify-between items-center w-full">
          <div className='md:w-1/5 w-4/5 md:mx-10 mx-5 transition-all duration-150 ease-linear delay-75 flex items-center'>
            {/* <img src={logo} alt="" className='w-1/6' /> */}
            <h1 className='md:text-3xl text-white text-2xl text-center block font-semibold text-dark font-style mx-2'>BookWorm</h1>
          </div>

          <div className="md:w-[40%] w-full md:mx-10 mx-0 ">

            <div className={`w-full flex md:flex-row flex-col md:justify-around justify-center items-center  md:z-auto z-[-1] md:shadow-none shadow-xl md:bg-transparent bg-sky-800 md:py-0 py-2 md:static duration-300 delay-150 transition-all ease-linear absolute left-0 right-0 
          ${open ? 'top-14' : '-top-80'}`}>
              {
                menuItems.map(item =>
                  <Link key={item.menu}
                    onClick={() => setOpen(!open)}
                    to={item.url}
                    className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
                  >{item.menu}
                  </Link>
                )
              }
              {
                user ?
                  <>
                  <Link to="/dashboard"
                    className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
                  >Dashboard
                  </Link>
                  <Link onClick={handleSignOut}
                    className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
                  >Log Out
                  </Link>
                  </>
                  :
                  <Link to="/login"
                    className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500'
                  >Log In
                  </Link>
              }
            </div>

          </div>
          <div className='md:hidden block mx-5'>
            <button onClick={() => setOpen(!open)}>
              {
                !open ? <HiOutlineMenu className='w-6 h-6 text-sky-100' /> : <HiOutlineX className='w-6 h-6 text-sky-100' />
              }
            </button>
          </div>


        </nav>
      </div>
    </div>
  )
}

export default NavBar
