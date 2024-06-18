import React from 'react'

const About = () => {
    return (
        <div className='mb-20'>
            <div className='bg-no-repeat bg-center bg-cover py-20 px-10' 
            style={{ backgroundImage: `url("https://t4.ftcdn.net/jpg/06/83/02/03/240_F_683020304_NIk1UI7QJKATxQIgBbHRqtLYBf2N5aeI.jpg")` }}>
                <h2 className="text-center text-3xl text-sky-300 font-bold">About Book Review</h2>
            </div>
            <p className='w-3/4 mx-auto my-10'>
                A book review is a critical evaluation of a book, where the reviewer discusses its content, themes, and overall impact. It typically includes a summary of the book's main points, the reviewer's analysis and opinions, and a recommendation for potential readers. The goal is to inform others about the book's strengths and weaknesses, helping them decide if it's worth reading. <br />
                Book reviews summarize the source's content by providing a brief and clear overview of the main plot, key characters, and central themes without giving away any spoilers. This helps readers understand the essence of the book and sets the stage for your analysis and evaluation.

            </p>
        </div>
    )
}

export default About
