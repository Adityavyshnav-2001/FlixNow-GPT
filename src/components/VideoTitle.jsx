import React from 'react'

const Videotitle = ({title, overview}) => {
  return (
    <div className=" absolute w-screen h-screen aspect ratio mt-20 pt-[12%] px-24  bg-gradient-to-t from-black text-white ">
        <h1 className="text-6xl font-bold ">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex ">
            <button className="bg-gray-500 text-white p-4 px-16 text-center text-xl rounded-lg ">▶️Play</button>
            <button className="mx-2 bg-gray-500 text-white p-4  px-16 text-xl rounded-lg  ">My List</button>
        </div>
    </div>
  )
}

export default Videotitle