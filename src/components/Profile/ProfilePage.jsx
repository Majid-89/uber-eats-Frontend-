import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiDiscGolfBag } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";

function ProfilePage() {
  return (
    <div className='mt-28'>
      <div className="">

        <img
          src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"
          alt="burger pic"
          className='z-0 w-full h-[500px]  object-cover '
        />

      </div>
      <div className=" relative bg-white mt-[-200px] shadow-lg mx-auto w-[90%] h-1/2 rounded-lg p-8 ">
        <div className="absolute top-0 left-1/2 transform  -translate-x-1/2   ">
          <img className='w-48 shadow-2xl mt-[-60%] rounded-[50%]' src="https://www.ommel.fi/content/uploads/2019/03/dummy-profile-image-female.jpg" alt="" />
        </div>
        <div className="first-row flex justify-between ">
          {/* <div className="flex justify-around flex-wrap  w-[120px] ">
            <div className="pr-8">
              <h1 className='font-bold text-2xl ml-2'>22</h1>
              <p className='font-normal text-gray-700  text-1xl '>Friends</p>
            </div>
            <div className="pr-8">
              <h1 className='font-bold text-2xl ml-2'>22</h1>
              <p className='font-normal text-gray-700  text-1xl '>Friends</p>
            </div>
            <div className="pr-8">
              <h1 className='font-bold text-2xl ml-2'>89</h1>
              <p className='font-normal text-gray-700  text-1xl '>Friends</p>
            </div>
          </div> */}

          <div className=" mt-32 sm:mt-0 w-full flex  justify-end">
            <button type="button" class="text-white bg-green-600
            hover:bg-green-900  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2 ">CONNECT</button>
          </div>
        </div>
        <div className="description-section  mt-32 w-full lg:w-[45%] mx-auto text-center">
          <div className="">
            <h1 className='font-bold text-gray-700 text-4xl sm:text-5xl'>Jenna Stones</h1>
            <div className="flex items-center justify-center mt-8">
              <FaMapMarkerAlt className='mr-3  text-gray-400 ' />
              <p className='font-bold text-gray-400  text-1xl  cursor-pointer'>LOS ANGELES, CALIFONIA</p>
            </div>
            <div className="flex items-center justify-center mt-8 cursor-pointer">
              <GiDiscGolfBag className='mr-3  text-gray-400 ' />
              <p className='font-bold text-gray-400  text-1xl   text-center'>Solution Manager - Creative Tim Office</p>
            </div>
            <div className="flex items-center justify-center mt-2">
              <FaUniversity className='mr-3  text-gray-400 ' />
              <p className='font-bold text-gray-400  text-1xl  cursor-pointer'>University of Computer Science </p>
            </div>



          </div>
        </div>
        <hr className='w-full  bg-yellow-500 mt-8' />
        <div className="bottom-section text-center">
          <p className='mt-9 w-[80%] mx-auto text-gray-800 text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, saepe assumenda! Libero praesentium obcaecati repellendus possimus enim cum dolorem eius corrupti aspernatur, unde laboriosam quae beatae excepturi, necessitatibus doloremque mollitia a nesciunt porro tenetur vero iste placeat at! Consectetur porro libero a dolore officia cum!
          </p>
          <p className='py-3 text-gray-500 cursor-pointer'>show more</p>
        </div>
      </div>


    </div>
  )
}

export default ProfilePage