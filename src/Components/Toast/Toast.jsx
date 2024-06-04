import React from 'react'

const Toast = ({ message, show, onClose }) => {
    return (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md transition-opacity duration-300">
            <div className="flex justify-between items-center">
                <span>{message}</span>
                <button onClick={onClose} className="ml-4 text-lg">&times;</button>
            </div>
        </div>
    )
}

export default Toast
