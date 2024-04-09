import Challenge_1 from "./challenge_1/mockups/nvjjyhvhqfwnjseojdgg.png"
import Challenge_2 from "./challenge_2/mockups/design/desktop-design.jpg"
import Challenge_3 from "./challenge_3/mockups/design/desktop-design.jpg"
import Challenge_4 from "./challenge_4/mockups/design/desktop-design.jpg"
import Challenge_5 from "./challenge_5/mockups/design/desktop-design.jpg"
import { useNavigate } from "react-router-dom";
const data = [
    { path: "/Challenge_1", title: "Password Generator" },
    { path: "/Challenge_2", title: "Interactive card details form" },
    { path: "/Challenge_3", title: "Single price grid component" },
    { path: "/Challenge_4", title: "Expenses chart component" },
    { path: "/Challenge_5", title: "Fylo data storage component" },
    { path: "/Challenge_6", title: "Advice generator" },
    { path: "/Challenge_7", title: "Dictionary" },
    // { path: "/Clock", title: "lorem" },
    { path: "/Clockv2", title: "Clock" },
    { path: "/VfmCalc", title: "Value for Money Calculator" },
    { path: "/page1", title: "Page animation iris" },
    { path: "/CustomComponents", title: "Custom components" },
    { path: "/BlackJack", title: "BlackJack" },
  ];
  
export const Welcome = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen bg-slate-200">
            <h1 className=" text-center font-semibold text-3xl md:text-6xl py-12">Frontend mentor challenges</h1>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    {data.map((item) => {
                        return (
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-4">
                                <div className=" rounded-lg overflow-hidden bg-green-300 transition-all cursor-pointer shadow-sm hover:shadow-lg" onClick={() => { navigate(item.path) }}>
                                    {/* <img src={Challenge_1} alt="not loaded" className="w-full" /> */}
                                    <h1 className="p-3 text-center text-2xl">{item.title}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}