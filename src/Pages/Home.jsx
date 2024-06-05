import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner/Banner'
import Reviews from '../Components/BookReviews/Reviews'
import Book from '../Components/Books/Book'

const Home = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    async function load() {
      const booksRes = await fetch("http://localhost:5000/books");
      const booksData = await booksRes.json();
      setBooks(booksData);
    }
    load();
  }, [])

  const [currentSlider, setCurrentSlider] = useState(0);

  const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? books.length - 2 : currentSlider - 1));
  const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === books.length - 2 ? 0 : currentSlider + 1));
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div>
      <Banner />
      <div className='py-20'>
        <h1 className='text-center text-5xl font-semibold font-serif'>Popular Books</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
          {
            books.map((book, index) =>
              <Book key={index} book={book} />
            )
          }

        </div>
      </div>
      <div className='py-20 bg-sky-50'>
        <h1 className='text-center text-5xl font-semibold font-serif'>Reviews</h1>
        <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
          <div className="relative overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
              {/* arrow left */}
              <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g>
                </svg>
              </button>
              {/* arrow right */}
              <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" ></path></g>
                </svg>
              </button>
            </div>
            {/* slider container */}
            <div
              className="ease-linear duration-300 flex"
              style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}>
              {
                books.map((book, index) =>
                  <Reviews key={index} book={book} />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
