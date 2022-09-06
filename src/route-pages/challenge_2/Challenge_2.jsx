import cf from './images/bg-card-front.png'
import cb from './images/bg-card-back.png'
export const Challenge_2 = () => {
    return (
        <>
            <div className="w-screen h-screen">
                <div className={`w-full lg:w-1/3 lg:h-full qoHsFYAt bg-cover bg-center flex justify-center items-center flex-col`}>
                    <div className="flex flex-col-reverse lg:flex-col mt-[calc(2rem+1vw+2rem)]">
                        <div className="relative cf lg:mb-[calc(2rem+1vw)] ml-4 mr-12 lg:ml-0 lg:mr-0 z-10 -mt-[calc(6vw+1rem)] -mb-12">

                            <img src={cf} alt="" className=' lg:ml-[calc(33vw-18rem)]' />
                            <div className="w-full cfc absolute top-0 lg:left-[calc(33vw-18rem)]">
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" class=" w-full max-w-[447px]" viewBox="0 0 240 40"><ellipse cx="28" cy="23.5" rx="12" ry="12" fill="#fff"></ellipse><path d="M 60 24 c 0 3.339 -2.7042 6.045 -6.039 6.045 c -3.3354 0 -6.039 -2.706 -6.039 -6.045 c 0 -3.339 2.7036 -6.045 6.039 -6.045 c 3.3348 0 6.039 2.706 6.039 6.045 Z" stroke="#fff"></path></svg>
                                <svg className=' w-full max-w-[447px] fill-white' fontFamily='Space Grotesk' letterSpacing="1.6" fontSize="1em" fontWeight={400} viewBox="0 0 240 21">
                                    <text x="16" y="17.5">0000 0000 0000 0000</text>
                                </svg>
                                <svg className=' w-full max-w-[447px] fill-white' letterSpacing="2" fontSize="0.5em" fontFamily='Space Grotesk' fontWeight={400} viewBox="0 0 240 21">
                                    <text x="16" y="17.5">JANE APPLESEED</text>
                                    <text x="190" y="17.5">00/00</text>
                                </svg>
                            </div>
                        </div>
                        <div className="relative ml-12 mr-4 lg:ml-0 lg:mr-0">
                            <img src={cb} alt="" className=' lg:ml-[calc(33.33vw-14rem)]' />
                            <div className="w-full cbc absolute max-w-[447px] top-0 lg:left-[calc(33.33vw-14rem)] overflow-hidden">
                                <svg className=' w-full max-w-[447px] fill-black ml-[78%] mt-[22%]' fontSize="0.8em" viewBox="0 0 240 21" fontFamily='Space Grotesk'>
                                    <text x="0" y="16.5">888</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}