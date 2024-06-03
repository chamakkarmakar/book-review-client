import React from 'react'

const Footer = () => {
  return (

    <footer className="flex flex-col text-black">
      <div className="flex justify-around items-center bg-sky-50 py-10">
        <aside className="text-xl">
         
          <p>BookWorm</p>
        </aside>
        <nav className="flex flex-col gap-3 text-lg">
          <ul>
            <li>
              <a className="cursor-pointer hover:underline">Home</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Contact</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Books</a>
            </li>
          </ul>
        </nav>
      </div>
      <aside className="bg-sky-100 py-5 text-center text-sm">
        <p>&copy; 2024 BookWorm. All Rights Reserved.</p>
      </aside>
    </footer>

  )
}

export default Footer
