import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Toast from '../Components/Toast/Toast';

const EditProfile = () => {
    const user = useLoaderData();
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const mobile = form.mobile.value;
        const userData = { name, mobile, };
        fetch(
            `http://localhost:5000/user/${user?.email}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setShowToast(true)
                console.log(data)
            });
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        form.reset();
    }

    return (
        <div className="flex md:w-3/4 w-full mx-auto flex-col justify-center bg-white py-10 ">
            <h2 className="pb-8 text-center text-3xl font-bold text-indigo-500">Update Profile</h2>

            <form onSubmit={handleSubmit} className="flex  w-full flex-col items-center justify-center gap-4">

                <input className="w-[80%] rounded-lg border border-indigo-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:w-[60%]"
                    type="text"
                    placeholder="Username"
                    name="name"
                    defaultValue={user?.name} />

                <input
                    className="w-[80%] rounded-lg border border-indigo-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:w-[60%]"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user?.email}
                    disabled
                />

                <input
                    className="w-[80%] rounded-lg border border-indigo-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:w-[60%]"
                    type="number"
                    placeholder="Mobile"
                    name="mobile" />

                <input className="w-[80%] rounded-lg bg-indigo-500 cursor-pointer hover:bg-indigo-700 px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
            </form>
            {
                showToast &&
                <Toast
                    message="Profile updated successfully!"
                    show={showToast}
                    onClose={() => setShowToast(false)}
                />
            }
        </div>
    )
}

export default EditProfile
