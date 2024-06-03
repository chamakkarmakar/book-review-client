import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignWithGoogle = () => {
  const {signWithGoogle} = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signWithGoogle();
  };
  
    return (
        <div onClick={handleGoogleSignIn} className="mx-auto flex h-[50px] w-[200px] items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
            <div className="flex h-full w-[50%] items-center bg-indigo-500 pl-4 text-sm text-white">Sign With</div>
            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-indigo-500 group-hover:hidden"></span>
            <span className="pr-4 text-4xl font-bold text-indigo-500">G+</span>
        </div>
    )
}

export default SignWithGoogle
