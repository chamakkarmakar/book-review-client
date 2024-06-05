import React from 'react'
import { ImQuotesRight } from "react-icons/im";
import { MdOutlineStarRate } from "react-icons/md";

const Reviews = ({ book }) => {
  const { title, book_image, author, review_text, ratings, category } = book
  return (
    <div className="p-4 min-w-full md:min-w-[50%] ">
      <div className="h-full p-8 rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-white">
        <div className="flex justify-between items-center">
          <ImQuotesRight className='w-10 h-10 text-sky-800' />
          <p className='flex items-center'>
            <MdOutlineStarRate className='w-5 h-5 text-amber-500 inline' />
            <MdOutlineStarRate className='w-5 h-5 text-amber-500 inline' />
            <MdOutlineStarRate className='w-5 h-5 text-amber-500 inline' />
            <MdOutlineStarRate className='w-5 h-5 text-amber-500 inline' />
            <MdOutlineStarRate className='w-5 h-5 text-amber-500 inline' />
            <span className='ml-3 '>{ratings}</span>
          </p>
        </div>
        <p className="leading-relaxed mb-6 text-gray-500">{review_text}</p>
        <a className="inline-flex items-center">
          <img className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" src={book_image} alt="carousel navigate ui" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">{title}</span>
            <span className="text-gray-500 text-sm">{author}</span>
          </span>
        </a>
      </div>
    </div>
  )
}

export default Reviews
