import React, { useEffect, useState } from 'react';
import slider1 from "../../assets/Banner/slider-1.jpg"
import slider2 from "../../assets/Banner/slider-2.jpg"
import slider3 from "../../assets/Banner/slider-3.jpg"

const Banner = () => {
    const images = [slider1, slider2, slider3];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const next = (current + 1) % images.length;
        const id = setTimeout(() => setCurrent(next), 7000); // Change image every 5 seconds
        return () => clearTimeout(id);
    }, [current]);

    return (
        <div className="w-full mt-[-60px] h-[650px] bg-no-repeat bg-cover bg-center font-serif" style={{ backgroundImage:  `url(${images[current]})` }}>
            <div className="w-full h-full bg-opacity-50 bg-rose-50 flex flex-col justify-center items-center">
                <div className=" md:mt-52 mt-36 md:w-3/4 w-full">
                    <h1 className="md:text-6xl text-3xl text-center font-semibold md:px-0 px-2">Discover Your Best Books Now</h1>
                    <p className='py-3 md:px-20 text-center px-10 md:text-lg text-sm text-gray-700'> With thousands of reviews covering every genre, you'll never run out of amazing books to explore. Join our community of readers, share your insights, and help others find their next great read.</p>

                    <div className="flex md:w-1/2 w-full mx-auto justify-around  items-center">
                    <button className="text-md w-32 h-14 bg-sky-500 text-white rounded-full relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Shop Now</button>
                        {/* <button className='py-3 px-8 bg-rose-800 text-white md:text-lg text-sm rounded-full hover:bg-rose-950 hover:border-amber-700'>Shop Now</button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner
