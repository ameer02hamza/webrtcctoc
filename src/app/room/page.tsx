"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { connectToServer } from '@/helpers/callroom';

function Room() {
  const router = useRouter()
  const navigateToCall = () => {
    router.push('/permission');
  }
  const [roomName, setRoomName] = useState("")
  let generateRandomString = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setRoomName(result);
  }
  useEffect(() => {
    connectToServer()
    generateRandomString(40);
  }, []);
  return (
    <div className="h-screen flex justify-center  items-center">
      <div className='flex px-11 justify-around w-full flex-wrap'>
        {roomName != "" ? <input placeholder='Enter your room no' type="text" defaultValue={roomName}
          className='animate-typing w-3/4 font-[poppins] tracking-normal leading-normal md:leading-relaxed md:tracking-widest h-20 border-b-2 border-r-0 border-l-0 border-green-600 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extralight text-sm md:text-4xl uppercase px-3' /> :
          <div className='w-3/4'></div>}
        <button onClick={navigateToCall} className='mt-3 md:mt-0 py-6 border-white border-2 px-14 animate-pulse bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:animate-none'> Enter Room</button>
      </div>
    </div>
  )
}

export default Room