import React, { useEffect, useState } from 'react'
import Reviews from '../Components/BookReviews/Reviews';

const AllReviews = () => {
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
        <div className='my-20'>
        <h1 className='text-center text-5xl font-semibold font-serif'>All Reviews</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
          {
            books.map((book,index) =>
              <Reviews key={index} book={book} />
            )
          }

        </div>
      </div>
    )
}

export default AllReviews
