import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Toast from '../Components/Toast/Toast';
import { getAuth,updatePassword  } from 'firebase/auth';
import { app } from '../firebase/firebase.config';


const EditProfile = () => {
    const auth = getAuth(app);

    const token = localStorage.getItem("token");
    const userInfo = useLoaderData();
    const [showToast, setShowToast] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const mobile = form.mobile.value;

        const user = auth.currentUser;
        if (user) {
            updatePassword(user, newPassword).then(() => {
                console.log('updated');
              }).catch((error) => {
                console.log(error);
              });
        } else {
            setError('No user is currently logged in.');
        }

        const userData = { name, mobile, };
        fetch(
            `https://book-review-server.vercel.app/user/${user?.email}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
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
                    defaultValue={userInfo?.name}

                />

                <input
                    className="w-[80%] rounded-lg border border-indigo-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:w-[60%]"
                    type="email"
                    placeholder="Email"
                    name="email"
                    defaultValue={userInfo?.email}
                    disabled
                />

                <input
                    className="w-[80%] rounded-lg border border-indigo-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:w-[60%]"
                    type="number"
                    placeholder="Mobile"
                    name="mobile"
                    defaultValue={userInfo?.mobile}

                />

                <input
                    className="w-[80%] rounded-lg border border-indigo-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:w-[60%]"
                    type="password"
                    placeholder="New Password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />

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
