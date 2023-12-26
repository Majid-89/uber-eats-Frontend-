import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillGoogleCircle } from "react-icons/ai"
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <>

            <main className="flex items-center justify-center h-screen bg-green-500 ">
                <div className="border-2 bg-white border-gray-300 bg-white p-4 w-96 shadow-md shadow-slate-600 rounded-xl">
                    {/* from */}
                    <form action="">
                        <h1 className=' font-bold pb-2 text-2xl tracking-wide text-center'>Login</h1>
                        <div className='my-2'>
                            <p className=' text-zinc-700 font-semibold'>Email :</p>
                            <input
                                type="text"
                                placeholder='Enter your Email'
                                className='border border-gray-400 p-2 w-full focus:outline-none'
                                required

                            />
                        </div>
                        <div>
                            <p className=' text-zinc-700 font-semibold'>Password :</p>
                            <input
                                type="password"
                                placeholder='Enter your Password'
                                className=' border border-gray-400 p-2 w-full focus:outline-none'
                                required

                            />
                        </div>
                        <div className='flex pt-5 gap-5'>
                            <input type="checkbox" />
                            <p className=' '>Remember me ?</p>
                        </div>

                        <Link to="/Dashboard">  <div className="mt-4">
                            <button className="border border-gray-400 bg-blue-700 text-white bg-green-500 px-20 p-2 text-xl rounded-full w-full ">
                                Login
                            </button>
                            <p className=' text-end'>Forgot Passowrd?</p>
                        </div>
                        </Link>
                        <p className=' flex justify-center font-bold pb-3'>OR</p>
                        <p className=' text-center text-zinc-500'>Don't have an account? <Link to="/Signup"> <span className=' text-green-500  font-bold'>Signup now</span> </Link></p>

                    </form>



                </div>
            </main>
        </>
    );
};

export default Login;
