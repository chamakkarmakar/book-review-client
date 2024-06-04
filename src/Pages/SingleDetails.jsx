import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Book from '../Components/Books/Book';

const SingleDetails = () => {
    const book = useLoaderData();
    const {title,book_image,author,review_text,ratings,category,price}=book
  return (
    <div className="mx-auto my-20 w-[350px] space-y-6 rounded-xl bg-white px-4 pb-8 pt-4 font-sans shadow-lg dark:bg-[#18181B]">
        <div className="flex h-44 w-full justify-center lg:h-[250px]">
            <img width={300} height={300} className="h-full w-full rounded-lg bg-black/40" src={book_image} alt={title} />
        </div>
        <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">{title}</h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">{author}</p>
        </div>
        <p className="text-xs font-semibold text-gray-700 md:text-sm">"{review_text}"</p>
        <p className="text-xs font-semibold text-gray-700 md:text-sm">ratings: {ratings}</p>
        
        <div className='flex justify-between items-center'>
        <p className="text-xs font-semibold text-gray-700 md:text-sm">${price}</p>
        <p className="text-xs font-semibold text-gray-400 md:text-sm"> {category}</p>
        </div>
    </div>
  )
}

export default SingleDetails
