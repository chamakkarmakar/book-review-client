import React from 'react'

const Reviews = ({book}) => {
    const {title,book_image,author,review_text,ratings,category}=book
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

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
        <button className="t w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">View Details</button>
        </div>
    </div>
  )
}

export default Reviews
