import React from 'react'

const Author = ({authorSlider,author,index}) => {
  return (
    <div 
    className={`${authorSlider === index ? "h-[240px] md:h-[300px]" : "h-[220px] md:h-[280px] scale-95 opacity-40"} min-w-[50%] relative duration-200`}
    style={{ perspective: "200px" }}>
    <img src={author.img} className="w-full h-full bg-gray-900 rounded-lg duration-300" alt={author.tags} style={{ transform: `${authorSlider - 1 === index ? "rotateY(4deg)" : authorSlider + 1 === index ? "rotateY(-4deg)" : ""}`, transformStyle: "preserve-3d", }} />
    <h6 className='text-center font-bold text-xl'>{author.author}</h6>
    <p className='text-center text-gray-700 font-medium text-sm'>{author.published_book} published books</p>

</div>
  )
}

export default Author
