
import './css/challenge_4.css'
import { useState } from 'react'
export const Challenge_4 = () => {
    return (
        <>
            <div className=" bg-[#f5eadd] w-screen min-h-screen flex items-center">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-3/4 md:w-3/4 lg:w-[60vw] xl:w-1/2 overflow-hidden bg-slate-50 rounded-xl shadow-xl m-3">
                            <div className="p-10">
                                <h1 className='mb-4 text-3xl text-teal-500 font-semibold'>Join our community</h1>
                                <h1 className='mb-4 text-xl text-lime-400 font-semibold'>30-day, hassle-free money back guarantee</h1>
                                <p className='text-gray-300 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore eos atque consequuntur iste expedita tempora laborum, quia est. Accusantium.</p>
                            </div>
                            <div className="block md:flex">
                                <div className="p-10 bg-teal-500 w-full md:w-1/2">
                                    <h1 className='mb-4 text-xl text-white font-semibold'>Monthly Subscription</h1>
                                    <div className="flex">
                                        <h1 className='text-white font-semibold text-4xl'>$29</h1>
                                        <p className='text-white/40 my-auto ml-2 font-semibold'>per month</p>
                                    </div>
                                    <p className='text-white my-auto mt-4 font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className='bg-lime-400 w-full mt-6 p-3 rounded-lg shadow-md text-white font-semibold hover:bg-lime-500 transition-all'>Sign Up</button>
                                </div>
                                <div className="p-10 bg-teal-400 w-full md:w-1/2">
                                    <h1 className='mb-4 text-xl text-white font-semibold'>Why Us</h1>
                                    <p className='text-white my-auto mt-4 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quam eaque a dolor cumque magni repellendus beatae in porro iusto voluptates perspiciatis sapiente quaerat, molestiae culpa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}