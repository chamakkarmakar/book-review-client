import React from 'react'
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { VscBook } from "react-icons/vsc";
import { BiSolidBookBookmark } from "react-icons/bi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Category from './Category';

const Categories = () => {
    const categories = [
        {
            category : "Arts & Photography",
            icon : <MdOutlinePhotoSizeSelectActual className='w-20 h-20 text-purple-500'/>
        },
        {
            category : "Romance",
            icon : <GiSelfLove className='w-20 h-20 text-rose-500'/>
        },
        {
            category : "Literature & Fiction",
            icon : <VscBook className='w-20 h-20 text-indigo-500'/>
        },
        {
            category : "Heath",
            icon : <MdOutlineHealthAndSafety className='w-20 h-20 text-orange-500'/>
        },
        {
            category : "History",
            icon : <BiSolidBookBookmark className='w-20 h-20 text-purple-500'/>
        },
        {
            category : "Food & Drink",
            icon : <MdFoodBank className='w-20 h-20 text-amber-500'/>
        },
        {
            category : "Biography ",
            icon : <FaUserEdit className='w-20 h-20 text-black'/>
        },
        {
            category : "Cook Books",
            icon : <GiCookingPot className='w-20 h-20 text-slate-500'/>
        }
    ]
  return (
    <div className='my-20 md:mx-20 mx-2'>
      <h1 className='text-center text-5xl font-semibold font-serif'>Featured Categories</h1>
      <div className='grid md:grid-cols-4 grid-cols-2 '>
{
    categories.map((cat,index)=>
        <Category key={index} cat={cat} />
    )
}
      </div>
    </div>
  )
}

export default Categories
