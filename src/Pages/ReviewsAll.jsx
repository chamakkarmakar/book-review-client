import React, { useEffect, useState } from 'react'
import Reviews from '../Components/BookReviews/Reviews'

const ReviewsAll = () => {
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
            <div className='py-20 px-20'>
                <h1 className='text-center text-5xl font-semibold font-serif'>Reviews</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                    {
                        books.map((book, index) =>
                            <Reviews key={index} book={book} />
                        )
                    }
                </div>
            </div>
    )
}

export default ReviewsAll
