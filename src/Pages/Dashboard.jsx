import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  return (
    <div className='mt-5 '>
      <div>
        {/* <h1 className="text-3xl my-10 text-center">Profile Information</h1> */}

        <div className="flex justify-between items-center mb-7">

          <div className='flex items-center justify-between'>
            <details className="dropdown">
              <summary className="m-1 btn"><CiMenuKebab className='w-7 h-7' /></summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><Link to={`/dashboard/profile/edit/${userInfo?._id}`}>Edit Profile</Link></li>
              </ul>
            </details>
            <div>
              <h1 className='text-sm font-medium '>{userInfo?.name}</h1>
              <h1 className='text-sm  text-gray-400'>{userInfo?.email}</h1>
            </div>
          </div>

          <div >

            <img width={100} height={100} className=" h-[80px] w-[80px]  rounded-full border-4 border-white bg-gray-400 " src={user?.photoURL} alt={userInfo?.name} />
          </div>





          {/* <button className="t w-[20%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]"><Link to={`/dashboard/profile/edit/${userInfo?._id}`}>Edit Profile</Link></button> */}
        </div>
      </div>


    </div>
  )
}

export default Dashboard
