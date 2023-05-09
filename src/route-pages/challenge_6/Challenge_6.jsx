import { useState, useEffect } from 'react'
import axios from 'axios'
export const Challenge6 = () => {
    const [slip, setSlip] = useState({})
    useEffect(() => {
        getSlip()
    }, [])
    const getSlip = async () => {
        const res = await axios.get('https://api.adviceslip.com/advice')
        setSlip(res.data)
    }
    return (
        <>
            <div className='bg-[#1f2632] w-screen min-h-screen flex items-center bg-no-repeat bg-contain bg-bottom'>
                <div className="container mx-auto px-3">
                    <div className="w-full flex flex-col max-w-[500px] mx-auto bg-[#323a49] rounded-2xl shadow-lg p-12 relative">
                        <h1 className='text-[#52ffa8] text-center font-semibold text-sm tracking-[0.3em] mb-6'>ADVICE #{slip?.slip?.id}</h1>
                        <p className='text-center text-2xl text-[#cee3e9] font-semibold mb-8'>"{slip?.slip?.advice}"</p>
                        <svg className='w-full mb-4' width="444" height="16" viewBox='0 0 444 16' xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
                        <button className='bg-[#52ffa8] p-5 rounded-full absolute transition-all active:scale-[0.9] -bottom-8 hover:shadow-[#52ffa957] hover:shadow-[0_0_0_10px_rgba(0,0,0,0.3)] left-1/2 -translate-x-1/2' onClick={() => getSlip()}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}