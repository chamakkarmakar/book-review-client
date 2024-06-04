import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  console.log(userInfo);
  return (
    <div className='mt-20 mx-20'>
        <h1 className="text-3xl my-10 text-center">Profile Information</h1>

      <div className="flex justify-between mb-7">
      <div>
        <h1>{userInfo?.name}</h1>
        <h1>{userInfo?.email}</h1>
      </div>
        <button className="t w-[20%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]"><Link to={`/dashboard/profile/edit/${userInfo?._id}`}>Edit Profile</Link></button>
      </div>
      
    </div>
  )
}

export default Dashboard
