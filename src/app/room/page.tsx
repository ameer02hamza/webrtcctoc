import React from 'react'

function Room() {
  return (
    <div className="h-screen flex justify-center  items-center">
  <div className='flex  justify-around w-full'>
    <input placeholder='Enter your room no' type="text" className='w-3/4 h-20 border-2 border-green-600 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  rounded-lg font-extrabold text-4xl uppercase px-3' />
    <button className='border-white border-2 px-14 animate-pulse bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:animate-none'> Enter Room</button>
  </div>
</div>
  )
}

export default Room