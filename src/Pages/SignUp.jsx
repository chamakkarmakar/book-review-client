import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SignWithGoogle from '../Components/GoogleProvider/SignWithGoogle'
import { AuthContext } from '../Components/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";

    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        createUser(email, password).then((data) => {
            if (data?.user?.email) {
              const userInfo = {
                email: data?.user?.email,
                name: name,
              };
              fetch("https://book-review-server.vercel.app/user", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
              })
                .then((res) => res.json())
                .then((data) => console.log(data));
            }
          })
            // .then((userCredential) => {
            //     const user = userCredential.user;
            //     console.log(user);
            // })
            // .catch((error) => {
            //     const errorMessage = error.message;
            //     console.log(errorMessage);
            // });
        event.target.reset();
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    return (
        <div className="flex h-screen items-center justify-center bg-indigo-500/20 p-6 md:p-0">
            <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
                {/* register design side  */}
                <div className="hidden bg-cover h-full items-center justify-center bg-indigo-50 md:flex md:w-[60%] lg:w-[40%]" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/books-old-wooden-table_93675-128453.jpg?t=st=1717428949~exp=1717432549~hmac=2247669af66e5117d936d2f1880452138179689c136cd55d97170dda3ef23d62&w=740")` }}>

                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-medium">Welcome Back</h2>
                        <p className="animate-pulse text-sm ">Please Enter You Information</p>
                    </div>
                </div>
                {/* input side  */}
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                    <h2 className="pb-8 text-center text-3xl font-bold text-indigo-500">Registration Here</h2>
                    <form onSubmit={handleSignUp} className="flex  w-full flex-col items-center justify-center gap-4">
                        <input className="w-[80%] rounded-lg border border-indigo-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:w-[60%]" type="text" placeholder="Username" name="name" />
                        <input className="w-[80%] rounded-lg border border-indigo-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:w-[60%]" type="email" placeholder="Email" name="email" />
                        <input className="w-[80%] rounded-lg border border-indigo-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 md:w-[60%]" type="password" placeholder="Password" name="password" />
                        <p className="text-[14px] text-gray-400">Already have an account ? <Link to="/login" className="text-indigo-500 ">Log In</Link></p>
                        <input className="w-[80%] rounded-lg bg-indigo-500 cursor-pointer hover:bg-indigo-700 px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
                    </form>
                    {/* divider  */}
                    <div className="my-4 flex items-center px-8">
                        <hr className="flex-1" />
                        <div className="mx-4 text-gray-400">OR</div>
                        <hr className="flex-1" />
                    </div>
                    {/* sign with google */}
                    <SignWithGoogle />
                </div>
            </div>
        </div>
    )
}

export default SignUp
