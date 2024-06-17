import React, { useEffect, useState } from 'react'
import ReviewsCard from '../Components/ReviewsCard/ReviewsCard';
import Toast from '../Components/Toast/Toast';


const AllReviews = () => {
  const token = localStorage.getItem("token");
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    async function load() {
      const booksRes = await fetch("http://localhost:5000/books");
      const booksData = await booksRes.json();
      // console.log(booksData);
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
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = books.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className='my-20 '>
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center mx-10">
        <h1 className='text-center text-4xl font-semibold font-serif'>All Reviews</h1>
        <div className="md:mt-0 mt-10">
          <input
            className='outline-none rounded-lg border-2 border-gray-300 px-5 py-2 w-full'
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />

        </div>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
        {
          filteredData.map((book, index) =>
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
