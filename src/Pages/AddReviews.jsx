import React, { useState } from 'react'
import Toast from '../Components/Toast/Toast';

const AddReviews = () => {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const book = form.book.value;
        const author = form.author.value;
        const category = form.category.value;
        const price = form.price.value;
        const review = form.review.value;
        const image_url = form.image_url.value;

        const data = { id, book, author, category, price, review, image_url };

        await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                setShowToast(true)
                console.log(data);
                form.reset();
            });
        setTimeout(() => {
            setShowToast(false);
        }, 3000);

    };
    return (
        <div className='my-20 w-3/4 mx-auto'>
            <h1 className="text-5xl font-bold text-center">Add Review</h1>

            <div className="w-full mx-auto my-16">
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="book"
                            placeholder="Book Name"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="author"
                            placeholder="Author"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="category"
                            placeholder="Category"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="number"
                            name="price"
                            placeholder="Price"
                        />
                    </div>
                    <div className="mt-2">
                        <textarea style={{ resize: "none" }}
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="review"
                            placeholder="Your Review"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="image_url"
                            placeholder="Image URL"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="id"
                            placeholder="ID"
                        />
                    </div>
                    <div className="mt-2 flex justify-center items-center">
                        <input
                            className="btn mt-4 w-full bg-indigo-600 hover:bg-indigo-800 cursor-pointer rounded-xl font-semibold text-white p-4"
                            type="submit"
                            value="Add Review"
                        />
                    </div>
                </form>
            </div>
            {
                showToast &&
                <Toast
                    message="Review added successfully!"
                    show={showToast}
                    onClose={() => setShowToast(false)}
                />
            }
        </div>
    )
}

export default AddReviews
