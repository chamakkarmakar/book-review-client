import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
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
  return (

    <footer className="flex flex-col text-white mt-20">
      <div className="flex justify-around items-center bg-sky-800 py-10">
        <aside className="text-2xl font-serif">

          <p>BookWorm</p>
        </aside>
        <nav className="flex flex-col gap-3 text-lg">
          <ul>
            {
              menuItems.map((menu, index) =>
                <li key={index}>
                  <Link to={menu.url} className="cursor-pointer capitalize hover:underline">{menu.menu}</Link>
                </li>
              )
            }

          </ul>
        </nav>
      </div>
      <aside className="bg-sky-800 py-5 text-center text-sm">
        <p>&copy; 2024 BookWorm. All Rights Reserved.</p>
      </aside>
    </footer>

  )
}

export default Footer
