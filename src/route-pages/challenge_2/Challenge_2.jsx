import cf from './images/bg-card-front.png'
import cb from './images/bg-card-back.png'
import './css/challenge_2.css'
import { useState } from 'react'
export const Challenge_2 = () => {
    const [cardInfo, setCardInfo] = useState({
        number: "",
        name: "",
        expiryM: "",
        expiryY: "",
        cvv: ""
    })
    return (
        <>
            <div className="w-screen h-screen flex flex-col lg:flex-row">
                <div className={`w-full lg:w-1/3 lg:h-full qoHsFYAt bg-cover bg-center flex justify-center items-center flex-col`}>
                    <div className="flex flex-col-reverse lg:flex-col mt-[calc(2rem+1vw+2rem)]">
                        <div className="relative cf lg:mb-[calc(2rem+1vw)] ml-4 mr-12 lg:ml-0 lg:mr-0 z-10 -mt-[calc(6vw+1rem)] -mb-12">

                            <img src={cf} alt="" className=' lg:ml-[calc(33vw-18rem)]' />
                            <div className="w-full cfc absolute top-0 lg:left-[calc(33vw-18rem)]">
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" className=" w-full max-w-[447px]" viewBox="0 0 240 40"><ellipse cx="28" cy="23.5" rx="12" ry="12" fill="#fff"></ellipse><path d="M 60 24 c 0 3.339 -2.7042 6.045 -6.039 6.045 c -3.3354 0 -6.039 -2.706 -6.039 -6.045 c 0 -3.339 2.7036 -6.045 6.039 -6.045 c 3.3348 0 6.039 2.706 6.039 6.045 Z" stroke="#fff"></path></svg>
                                <svg className=' w-full max-w-[447px] fill-white' fontFamily='monospace' letterSpacing="1.6" fontSize="1.3em" fontWeight={600} viewBox="0 0 240 50">
                                    <text x="16" y="44">{cardInfo.number.split(/(.{4})/).filter(O => O).join(" ")}</text>
                                </svg>
                                <svg className=' w-full max-w-[447px] fill-white' letterSpacing="2" fontSize="0.65em" fontFamily='monospace' fontWeight={600} viewBox="0 0 240 42">
                                    <text x="16" y="24">{cardInfo.name}</text>
                                    <text x="190" y="24">{cardInfo.expiryM}/{cardInfo.expiryY}</text>
                                </svg>
                            </div>
                        </div>
                        <div className="relative ml-12 mr-4 lg:ml-0 lg:mr-0">
                            <img src={cb} alt="" className=' lg:ml-[calc(33.33vw-14rem)]' />
                            <div className="w-full cbc absolute max-w-[447px] top-0 lg:left-[calc(33.33vw-14rem)] overflow-hidden">
                                <svg className=' w-full max-w-[447px] fill-white ml-[80%] mt-[21.5%]' fontWeight={600} fontSize="0.8em" viewBox="0 0 240 21" fontFamily='monospace'>
                                    <text x="0" y="16.5">{cardInfo.cvv}</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-full lg:w-2/3 lg:h-full bg-cover bg-center flex justify-center items-center flex-col`}>
                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 w-full md:w-1/2 lg:px-8 xl:px-20">
                        <div className="w-full max-w-md space-y-8">
                            <form className="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" value="true" />
                                <div className="-space-y-px rounded-md shadow-sm">
                                    <div>
                                        <label htmlFor="name" className=" text-violet-900 font-semibold tracking-widest">CARDHOLDER NAME</label>
                                        <input id="name" name="name" type="text" autoComplete="name" value={cardInfo.name} required className="mt-2 mb-6 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-md font-semibold" placeholder="e.g. Jane Appleseed" onInput={(e) => { e.target.value.length < 17 && setCardInfo({ ...cardInfo, name: e.target.value }) }} />
                                    </div>
                                    <div>
                                        <label htmlFor="card-number" className=" text-violet-900 font-semibold tracking-widest">CARD NUMBER</label>
                                        <input id="card-number" name="card-number" type="number" autoComplete="number" required className="mt-2 mb-6 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-md font-semibold" placeholder="e.g. 1234 5678 9123 0000" onWheel={(e) => { e.target.blur() }} value={cardInfo.number} onInput={(e) => { e.target.value.length < 17 && setCardInfo({ ...cardInfo, number: e.target.value }) }} />
                                    </div>
                                    <div className='flex'>
                                        <div className="flex flex-col w-1/2 mt-2">
                                            <label htmlFor="password" className=" text-violet-900 font-semibold tracking-widest">EXP. DATE (MM/YY)</label>
                                            <div className="flex">
                                                <input id="card-number" name="card-number" type="number" autoComplete="number" required className="mt-2 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-md font-semibold" placeholder="MM" onWheel={(e) => { e.target.blur() }} value={cardInfo.expiryM} onInput={(e) => { e.target.value.length < 3 && e.target.value < 13 && setCardInfo({ ...cardInfo, expiryM: e.target.value }) }} />
                                                <input id="card-number" name="card-number" type="number" autoComplete="number" required className="mt-2 ml-2 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-md font-semibold" placeholder="YY" onWheel={(e) => { e.target.blur() }} value={cardInfo.expiryY} onInput={(e) => { e.target.value.length < 3 && setCardInfo({ ...cardInfo, expiryY: e.target.value }) }} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-1/2 mt-2 ml-4">
                                            <label htmlFor="password" className=" text-violet-900 font-semibold tracking-widest">CVC</label>
                                            <input id="card-number" name="card-number" type="number" autoComplete="number" required className="mt-2 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-md font-semibold" placeholder="e.g. 123" onWheel={(e) => { e.target.blur() }} value={cardInfo.cvv} onInput={(e) => { e.target.value.length < 4 && setCardInfo({ ...cardInfo, cvv: e.target.value }) }} />
                                        </div>
                                        

                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                                            <svg className="h-5 w-5 text-violet-500 group-hover:text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        Confirm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}