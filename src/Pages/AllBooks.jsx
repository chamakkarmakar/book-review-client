import React, { useEffect, useState } from 'react'
import Book from '../Components/Books/Book'
import { BiLoader } from 'react-icons/bi'

const AllBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
      async function load() {
        const booksRes = await fetch("http://localhost:5000/books");
        const booksData = await booksRes.json();
        setBooks(booksData);
      }
      load();
    }, [])
    return (
        <div>
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
        </div>
    )
}

export default AllBooks
