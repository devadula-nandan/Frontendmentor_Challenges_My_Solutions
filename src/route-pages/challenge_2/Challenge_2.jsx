import cf from './images/bg-card-front.png'
import cb from './images/bg-card-back.png'
export const Challenge_2 = () => {
    return (
        <div className="w-screen h-screen">
            <div className={`w-full lg:w-1/3 lg:h-full h-1/3 qoHsFYAt bg-cover bg-center flex justify-center items-center flex-col`}>
                <img src={cf} alt="" className=' shadow-xl rounded-xl absolute lg:static lg:mb-[calc(2rem+1vw)] lg:ml-[calc(33.33vw-14rem)] w-3/4 md:w-auto top-[20%] -ml-4' />
                <img src={cb} alt="" className=' shadow-xl rounded-xl lg:ml-[calc(33vw)] w-3/4 md:w-auto ml-8' />
            </div>
        </div>
    )
}