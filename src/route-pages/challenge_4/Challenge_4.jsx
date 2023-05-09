
import './css/challenge_4.css'
import { useState } from 'react'
import {BarChart} from './components/BarChart'
const data = require("./mockups/data.json")

export const Challenge4 = () => {
    return (
        <>
            <div className=" bg-[#f5eadd] w-screen min-h-screen flex items-center">
                <div className="container mx-auto">
                    <div className="flex max-w-5xl flex-wrap justify-center m-auto">
                        <div className="w-full p-4 sm:p-7 flex sm:w-3/4 md:w-3/4 lg:w-[60vw] xl:w-1/2 max-w-5xl overflow-hidden bg-[#ec775f] rounded-2xl shadow-sm m-3">
                            <div className="flex flex-1 flex-col">
                                <p className='text-orange-50 text-xl mb-2 font-semibold'>My balance</p>
                                <h2 className='text-orange-50 text-4xl font-semibold'>$921.48</h2>
                            </div>
                            <svg className='m-auto' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 8.5 100 82" height="64px" width="82px" enableBackground="new 0 0 64 64"><g><g><g><path d="M 52.97 20.67 c -1.31 0.61 -3.32 0.59 -4.62 -0.06 c -4.38 -2.18 -9.31 -3.43 -14.54 -3.43 C 15.69 17.19 1 31.88 1 50 c 0 18.12 14.69 32.81 32.81 32.81 c 5.23 0 10.16 -1.25 14.54 -3.43 c 1.29 -0.64 3.31 -0.67 4.62 -0.05 c 4.15 1.95 8.77 3.05 13.65 3.05 C 84.48 82.38 99 67.85 99 50 c 0 -17.85 -14.52 -32.38 -32.38 -32.38 C 61.74 17.62 57.12 18.72 52.97 20.67 z M 57.32 76.12 c -1.36 -0.49 -1.51 -1.75 -0.48 -2.76 c 6.04 -5.95 9.79 -14.21 9.79 -23.36 c 0 -9.15 -3.75 -17.41 -9.79 -23.36 c -1.03 -1.02 -0.88 -2.27 0.48 -2.76 c 2.91 -1.05 6.04 -1.63 9.3 -1.63 c 15.3 0 27.75 12.45 27.75 27.75 c 0 15.3 -12.45 27.75 -27.75 27.75 C 63.35 77.75 60.23 77.17 57.32 76.12 z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg>
                        </div>
                        <div className="w-full p-4 sm:p-7 sm:w-3/4 md:w-3/4 lg:w-[60vw] xl:w-1/2 overflow-hidden bg-[#fefcf7] rounded-2xl shadow-sm m-3">
                            <h2 className='text-4xl text-[#342316] font-semibold'>Spending - Last 7 days</h2>
                            <BarChart d={data} />
                            <div className="pt-6 flex justify-between border-t-4 border-[#f5eadd] mt-6">
                                <div className=''>
                                    <p className='text-[#908c86] text-xl mb-2 font-semibold'>Total this month</p>
                                    <h2 className='text-[#342316] text-5xl font-bold'>$478.33</h2>
                                </div>
                                <div className='flex flex-col items-end justify-end'>
                                    <p className='text-[#342316] text-xl mb-0 font-semibold'>+2.4%</p>
                                    <p className='text-[#908c86] text-xl mb-0 font-semibold'>from last month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}