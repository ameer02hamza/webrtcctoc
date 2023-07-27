import React from 'react'
import Image from "next/image"
function MainBody() {
    return (
        <section className='grid grid-cols-3 p-11 px-36'>
            <div className='relative col-span-2 rounded-md   bg-white'>
                <div className="absolute  bg-black h-1/5 w-1/5 right-2 top-2 rounded-lg">

                </div>
                <div className=' bg-green-500 rounded-md h-full'>

                </div>
            </div>
            <div className=' rounded-md  gap-2 flex flex-col items-center'>
                <div className="rounded-lg bg-blue-600 w-10/12 h-28 flex items-center gap-8">
                    <Image className='ml-5 h-10 w-10 rounded-full' height={100} width={100} src={"/ava.jpg"} alt='Avatar' />
                    <div>
                        <h1 className='font-extrabold'>Ameer Hamza</h1>
                        <p className='font-thin'>specialist</p>
                    </div>
                </div>
                <div className="relative rounded-lg bg-gray-700  w-10/12">
                    <div className="rounded-lg bg-gray-700 overflow-scroll h-[70vh] p-3">
                        <div className='bg-gray-600 rounded-lg p-2  flex justify-center'>
                            <button className='bg-gray-700 p-3 rounded-2xl'>
                                Recent Messages
                            </button>
                            <button className='p-3 rounded-2xl'>
                                Attachments
                            </button>
                        </div>
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
                        <div className='mt-7 flex gap-2'>
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
                        <div className='mt-7 flex gap-2'>
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
                        <div className='mt-7 flex gap-2'>
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
                        <button className='absolute left-6 bottom-7 text-gray-900'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
</svg>

                        </button>
                        <button className='absolute right-6 bottom-7 text-purple-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

                        </button>
                        <input type="text" placeholder='Write your message here' className='w-full p-2 rounded-md text-gray-700 pl-9 bg-gray-500' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MainBody
