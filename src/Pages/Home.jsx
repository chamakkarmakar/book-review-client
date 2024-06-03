import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner/Banner'
import Reviews from '../Components/BookReviews/Reviews'
import Book from '../Components/Books/Book'

const Home = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    async function load() {
      const booksRes = await fetch("http://localhost:3000/books");
      const booksData = await booksRes.json();
      setBooks(booksData);
    }
    load();
  }, [])
  return (
    <div>
      <Banner />
      <div className='my-20'>
        <h1 className='text-center text-5xl font-semibold font-serif'>Popular Books</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
          {
            books.map(book =>
              <Book book={book} />
            )
          }

        </div>
      </div>
      <div className='my-20'>
        <h1 className='text-center text-5xl font-semibold font-serif'>Reviews</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
          {
            books.map(book =>
              <Reviews book={book} />
            )
          }

        </div>
      </div>
    </div>
  )
}

export default Home
