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
                            <div className="cfc absolute top-0 lg:left-[calc(33vw-18rem)]">hi</div>
                        </div>
                        <div className="relative ml-12 mr-4 lg:ml-0 lg:mr-0">
                            <img src={cb} alt="" className=' lg:ml-[calc(33.33vw-14rem)]' />
                            <div className="cbc absolute top-0 lg:left-[calc(33.33vw-14rem)]">hi</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}