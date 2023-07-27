import React from 'react'

function Header() {
    return (
        <nav className='grid grid-cols-3 p-2 pl-40'>
            <div className='col-span-1'>
                <div className='flex justify-around'>
                    <button className='bg-gray-500 p-1 rounded-md '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <div className="relative w-96">
                        <input type="text" className='w-full p-1 px-10 rounded-md bg-gray-500' placeholder='Search..' />
                        <button className='rounded-md absolute bottom-1 left-2 z-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
            <div className='col-span-2 flex justify-end'>
               <div className="  w-96 flex justify-evenly">
               <button className="relative rounded-md
             bg-indigo-600 py-1 px-5 
             font-medium uppercase
              text-gray-100 ">Find me</button>
                <button className='bg-gray-500 p-1 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                    </svg>

                </button>
                <button className='bg-gray-500 p-1 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                </button>
               </div>
            </div>
        </nav>
    )
}

export default Header
