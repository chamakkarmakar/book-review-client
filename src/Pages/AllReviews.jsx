import React, { useEffect, useState } from 'react'
import ReviewsCard from '../Components/ReviewsCard/ReviewsCard';
import Toast from '../Components/Toast/Toast';

const AllReviews = () => {
  const token = localStorage.getItem("token");
  const [books, setBooks] = useState([])
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    async function load() {
      const booksRes = await fetch("http://localhost:5000/books");
      const booksData = await booksRes.json();
      console.log(booksData);
      setBooks(booksData);
    }
    load();
  }, [])
  const handleDeleteReviews = async (_id) => {
    await fetch(`http://localhost:5000/books/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowToast(true);
        setBooks(books.filter((book) => book._id !== _id));
      });
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <div className='my-20'>
      <h1 className='text-center text-5xl font-semibold font-serif'>All Reviews</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
        {
          books.map((book, index) =>
            <ReviewsCard 
          key={index} 
          book={book} 
          handleDeleteReviews={handleDeleteReviews}
          />
          )
        }

      </div>
      {
                showToast &&
                <Toast
                    message="Reviews deleted successfully!"
                    show={showToast}
                    onClose={() => setShowToast(false)}
                />
            }
    </div>
  )
}

export default AllReviews
