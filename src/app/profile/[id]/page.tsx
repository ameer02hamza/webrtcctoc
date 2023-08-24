"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
function ProfileById() {
  const [userId, setUserId] = useState("")
  const getProfile = async () => {
    const resp = await axios.get("/api/users/me")
    console.log(resp.data["email"]);
    setUserId(resp.data["_id"])
  }
  useEffect(() => {
    // getProfile();
  }, [])
  return (
    <div className='h-screen grid place-items-center'>
      <div className='w-full h-full bg-gradient-to-t to-sky-300 from-orange-700'>
<div className={`${styles.anim} flex`}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L34.3,181.3C68.6,171,137,149,206,160C274.3,171,343,213,411,202.7C480,192,549,128,617,106.7C685.7,85,754,107,823,128C891.4,149,960,171,1029,197.3C1097.1,224,1166,256,1234,234.7C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L34.3,181.3C68.6,171,137,149,206,160C274.3,171,343,213,411,202.7C480,192,549,128,617,106.7C685.7,85,754,107,823,128C891.4,149,960,171,1029,197.3C1097.1,224,1166,256,1234,234.7C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>

</div>
        <div className='relative w-72 h-96 bg-gradient-to-r left-[40%] -bottom-10 to-slate-300 from-slate-100 rounded-b-[30%]'>
          <div className='relative w-full
                        h-16 bg-gradient-to-r
                        to-slate-300 from-slate
                          rounded-[50%]'>
            <div className='absolute -top-7 left-0 bg-gradient-to-l
   to-slate-300 from-slate-100 
  h-14 w-full rounded-[50%]'>
              <div className='absolute left-0 bg-gradient-to-l
   to-slate-300 from-slate-100 
  h-14 w-full rounded-[50%] px-2'>
                <div className="absolute bg-orange-500 w-[calc(100%-50px)] h-5 left-6 rounded-[50%] top-8 animate-pulse"></div>
                <div className={`relative flex justify-center ${styles.teasmoke}`}>
                  <span className={`w-10 h-24 bg-gradient-to-r from-slate-100 to-gray-200 
         block rounded-[50%] px-3 blur-sm `}>
                  </span>
                  <span className={`w-10 h-24 bg-gradient-to-r from-slate-100 to-gray-200 
         block rounded-[50%] px-3 blur-sm `}>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute w-48 h-48 border-[1.5rem] -rotate-45 -right-24 border-l-0 border-t-0 border-slate-300 rounded-full'>
          </div>
        </div>
      </div>


    </div>

  )
}

export default ProfileById


{/*  */ }