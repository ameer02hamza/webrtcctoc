"use client"
import React from 'react'
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
function Profile() {
    const router  =useRouter();
    const logout =async ()=>{
            const resp:any = await axios.get("/api/users/logout");
            toast.success('Successfully logged out!');
            router.push("/login");
    }
  return (
    <div className='grid'>
        <button onClick={logout} className='border-2'>
            logout
        </button>
      <h1>Profile my id</h1>
      <Toaster
                position="top-right"
                reverseOrder={false}
            />
    </div>
  )
}

export default Profile
