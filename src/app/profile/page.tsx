"use client"
import axios from 'axios';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

function Profile() {
    const onLogout= async () => {

        try {
            const resp = await axios.get("/api/users/logout");
            console.log(`%c response`, 'background: #008000; color: #fff');
            console.log(resp.data);
            // router.push("/login")
            toast.success('Successfully logged out!')
        } catch (error) {
            toast.error('Failed to logout')
        }
    }
  return (
    <div className='grid place-items-center h-screen'>
        <button onClick={onLogout} className='bg-purple text-white border-2 rounded bg-purple-700 '>
            Logout
        </button>
        <Toaster
         position='top-center' />
    </div>
  )
}

export default Profile