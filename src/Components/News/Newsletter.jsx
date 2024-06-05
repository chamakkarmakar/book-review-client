import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-1/2 mx-auto '>
           <h1 className='text-center text-3xl font-semibold font-serif mb-16'>Join Our Newsletter</h1>

      <form className='flex items-center justify-center'>
        <input type="email" name="email" placeholder='Your Email' className='w-1/2 border-2 focus:border-sky-800 border-sky-500 outline-none px-7 py-3' />
        <input type="submit" value="subscribe" className=' px-5 py-3 border-2 border-sky-500 bg-sky-500 hover:bg-sky-800 cursor-pointer text-white font-bold' />
      </form>
    </div>
  )
}

export default Newsletter
