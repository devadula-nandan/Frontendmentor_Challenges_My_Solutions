import Challenge_1 from "./challenge_1/mockups/eqt6bvit5x7aqgh2m8tl.jpg"
import { useNavigate } from "react-router-dom";
export const Welcome = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen bg-slate-200">
            <h1 className=" text-center font-semibold text-6xl py-12">Frontend mentor challenges</h1>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4">
                        <div className=" rounded-lg overflow-hidden bg-green-300 transition-all cursor-pointer shadow-sm hover:shadow-lg" onClick={() => { navigate("./challenge_1") }}>
                            <img src={Challenge_1} alt="not loaded" className="w-full" />
                            <h1 className="p-3 text-center text-2xl">Password Generator</h1>
                        </div>
                        
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4">

                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4">

                    </div>

                </div>
            </div>
        </div>
    )
}