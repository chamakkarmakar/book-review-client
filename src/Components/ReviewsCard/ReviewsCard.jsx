import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ReviewsCard = ({book,handleDeleteReviews}) => {
    const {title,book_image,author,review_text,ratings,category,id}=book
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
        <div className='flex justify-between items-center'>
        <p className="text-xs font-semibold text-gray-700 md:text-sm">ratings: {ratings}</p>
        <p className="text-xs font-semibold text-gray-400 md:text-sm"> {category}</p>
        </div>

        <div className="flex items-center justify-between gap-6 text-sm md:text-base">
        <button className="t w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">View Details</button>
        <Link to={`edit/${id}`}><FaRegEdit className="w-7 h-7 text-green-600 hover:text-green-800 "/></Link>
        <button onClick={()=>handleDeleteReviews(id)}><RiDeleteBinLine className="w-7 h-7 text-rose-500 hover:text-rose-800" /></button>
        </div>
    </div>
  )
}

export default ReviewsCard
