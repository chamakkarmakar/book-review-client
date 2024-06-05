import React from 'react'

const Category = ({ cat }) => {
  const { category, icon } = cat;
  return (
    <div className="border/10 mx-auto my-20 md:w-[75%] w-[85%] rounded-2xl bg-white p-6 shadow-lg md:p-8">
      <div className="flex flex-col items-center justify-center my-3">
        {icon}
        <h6 className="text-center font-medium text-slate-700 dark:text-white/80 mt-3 mb-5">{category}</h6>
        <button className="rounded-full bg-[#16BAC5] md:px-6 py-2 px-4 text-white ">Shop Now</button>
      </div>
    </div>
  )
}

export default Category
