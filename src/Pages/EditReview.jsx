import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Toast from '../Components/Toast/Toast';

const EditReview = () => {
    const token = localStorage.getItem("token");
    const book = useLoaderData();
    console.log(book);
    const [showToast, setShowToast] = useState(false);

    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [category, setCategory] = useState(book.category);
    const [book_image , setBook_image ] = useState(book.book_image );
    const [price, setPrice] = useState(book.price);
    const [ratings, setRatings] = useState(book.ratings);
    const [review_text, setReview_text] = useState(book.review_text);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const author = form.author.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const review_text = form.review_text.value;
        const book_image = form.book_image.value;

        const data = { title, author, category,book_image , price, ratings, review_text};

        await fetch(`http://localhost:5000/books/${book._id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => {
          setShowToast(true)
          console.log(data);
          setTitle("");
          setAuthor("");
          setCategory("");
          setBook_image("")
          setPrice("");
          setRatings("")
          setReview_text("")
        });
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    // const { title, author, category,book_image , price, ratings, review_text}=books;
  return (
    <div className='my-20 w-3/4 mx-auto'>
            <h1 className="text-5xl font-bold text-center">Update Review</h1>

            <div className="w-full mx-auto my-16">
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="title"
                            placeholder="Book Name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="author"
                            placeholder="Author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <textarea style={{ resize: "none" }}
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="review_text"
                            placeholder="Your Review"
                            value={review_text}
                            onChange={(e) => setReview_text(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="url"
                            name="book_image"
                            placeholder="Image URL"
                            value={book_image}
                            onChange={(e) => setBook_image(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="number"
                            name="ratings"
                            placeholder="Ratings"
                            value={ratings}
                            onChange={(e) => setRatings(e.target.value)}
                        />
                    </div>
                    
                    <div className="mt-2 flex justify-center items-center">
                        <input
                            className="btn mt-4 w-full bg-indigo-600 hover:bg-indigo-800 cursor-pointer rounded-xl font-semibold text-white p-4"
                            type="submit"
                            value="Update Review"
                        />
                    </div>
                </form>
            </div>
            {
                showToast &&
                <Toast
                    message="Review updated successfully!"
                    show={showToast}
                    onClose={() => setShowToast(false)}
                />
            }
        </div>
  )
}

export default EditReview
