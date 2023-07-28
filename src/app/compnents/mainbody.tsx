"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
function MainBody() {
    const [showVideo, setShowVideo] = useState(true);
    const [showMessage, setshowMessage] = useState(true);
    useEffect(() => {
        // if(screen.width<500){
        //     setShowVideo(false);
        //         setshowMessage(true);
        // }
        console.log(`%c ${window.innerWidth} and ${screen.width} `, 'background: #222; color: #bada55')
    }, [])
    return (
        <section className='grid grid-cols-3 px-20'>
            { <div className={`relative col-span-2 w-full h-full rounded-md`}>
                <div className="absolute  bg-black h-1/5 w-1/5 right-2 top-2 rounded-lg">
                    <video className='h-full w-full rounded-md object-cover'
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" autoPlay loop muted></video>
                </div>
                <div className='rounded-md h-full'>
                    <video className='h-full w-full rounded-md object-cover'
                        src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay loop muted></video>
                    <div className='absolute flex justify-center gap-5 bottom-5 w-full'>
                        <button className='p-2 backdrop-brightness-50 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                                <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                            </svg>

                        </button>
                        <button className='p-2 backdrop-brightness-50 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                            </svg>

                        </button>

                        <button className='bg-red-600 p-2 rounded-md'>Leave</button>

                        <button className='p-2 backdrop-brightness-50 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                            </svg>

                        </button>
                        <button className='p-2 backdrop-brightness-75 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M19.5 6h-15v9h15V6z" />
                                <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>}
            {<div className={`hidden md:rounded-md ${!showVideo?'col-span-3':''} md:gap-2 md:flex md:flex-col md:items-center md:h-full`}>
                <div className="rounded-lg bg-blue-600 w-10/12 h-28 flex items-center gap-8">
                    <Image className='ml-5 h-10 w-10 rounded-full' height={100} width={100} src={"/ava.jpg"} alt='Avatar' />
                    <div>
                        <h1 className='font-extrabold'>Ameer Hamza</h1>
                        <p className='font-thin'>specialist</p>
                    </div>
                </div>
                <div className="rounded-lg bg-gray-700  w-10/12 ">
                    <div className='bg-gray-600 rounded-lg p-2  flex justify-center'>
                        <button className='bg-gray-700 p-3 rounded-2xl text-xs'>
                            Recent Messages
                        </button>
                        <button className='p-3 rounded-2xl text-xs'>
                            Attachments
                        </button>
                    </div>
                    <div className="rounded-lg bg-gray-700 overflow-scroll h-[50vh] p-3">

                        <div className='mt-7  flex gap-2'>
                            <Image className='ml-5 h-10 w-10 rounded-full' height={500} width={500} src={"/p1.jpg"} alt='Avatar' />
                            <div className="mt-4">
                                <div className='rounded-lg bg-gray-600 p-2'>
                                    hi how are you
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className="mt-4">
                                <div className='rounded-lg bg-gray-600 p-2'>
                                    hi how are you
                                </div>
                            </div>
                            <Image className='ml-5 h-10 w-10 rounded-full' height={500} width={500} src={"/p2.jpg"} alt='Avatar' />
                        </div>
                    </div>
                    <div className='w-full relative flex p-5'>
                        <button className='absolute left-6 bottom-7 text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>

                        </button>
                        <button className='absolute rounded-md right-5 bottom-1/4 text-blue-600 p-1.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>


                        </button>
                        <input type="text" placeholder='Write your message here' className='text-sm w-full p-2 rounded-md text-gray-700 pl-9 bg-gray-500' />
                    </div>
                </div>
            </div>}

        </section>
    )
}

export default MainBody
function useWindowSize() {
    throw new Error('Function not implemented.');
}

function useWindowDimensions(): { height: any; width: any; } {
    throw new Error('Function not implemented.');
}

