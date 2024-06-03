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
                <div className=" md:mt-52 mt-36 md:w-3/4 w-full md:bg-inherit bg-indigo-100 p-3">
                    <h1 className="md:text-6xl text-3xl text-center font-semibold md:px-0 px-2">Discover Your Best Books Now</h1>
                    <p className='py-3 md:px-20 text-center px-10 md:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis commodi voluptatum officia expedita reprehenderit, nesciunt dolor ipsum vel sit.</p>

                    <div className="flex md:w-1/2 w-full mx-auto justify-around  items-center">
                        <button className='py-3 px-8 bg-rose-800 text-white md:text-lg text-sm rounded-full hover:bg-rose-950 hover:border-amber-700'>Shop Now</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner
