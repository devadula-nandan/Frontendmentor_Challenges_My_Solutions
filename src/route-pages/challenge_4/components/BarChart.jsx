import { useEffect } from "react";
import { useState } from "react";

export const BarChart = ({d}) => {
    const [max, setMax] = useState(Math.max(...d.map(o => o.amount)) || 0);
    return (
        <div className="flex h-[24vh] items-end">
            {
                d.map((i) => {
                    return (
                        <div className=" h-[20vh] w-full flex flex-col justify-end p-2">
                            
                            <div className={"rounded-md cursor-pointer relative group transition-all " + (i.amount == max ? 'bg-[#76b5bc] ' : 'bg-[#ec775f] ') + (i.amount == max ? 'hover:bg-[#76b5bcb7]' : 'hover:bg-[#ec775fb7]')} style={{ height: `${((i.amount / max) * 100).toPrecision(4)}%` }}>
                                <div className="bg-[#382314] z-10 opacity-0 rounded group-hover:opacity-100 transition-all font-semibold absolute sm:-left-[14%] -left-[14%] text-white text-xs sm:text-base p-1 sm:p-2 sm:-top-12 -top-8">${ i.amount}</div>
                            </div>
                            <p className=" text-center text-xs sm:text-base">{i.day}</p>
                        </div>
                            
                        
                    )
                })
            }
        </div>
    )
}