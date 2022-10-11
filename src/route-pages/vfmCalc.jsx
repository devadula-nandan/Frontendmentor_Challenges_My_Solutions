import { useEffect, useState } from "react"

export const VfmCalc = () => {
    const [data, setData] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])
    const [entry, setEntry] = useState({})
    const [showModal, setShowModal] = useState(false);
    const [max,setMax] = useState(undefined);
    useEffect(() => {
        setMax(Math.max(...data.map(o => o.ppkg)))
    }, [data]);
    return (
        <>
            <div className=" mt-24 md:mt-48">
                <p>{ max}</p>
            </div>
            <div className=" container mx-auto px-3">
                {data.map((item) => {
                    return (
                        <div className="flex flex-wrap rounded mb-4 overflow-hidden shadow-sm" key={item.name} style={{ background: `rgba(51, 170, 51,${(100 - (item.ppkg * 100) / max).toFixed(2)}%)` }}>
                            <pre className="p-4 w-1/2 md:w-1/4 text-base font-semibold md:text-2xl bg-black/5 overflow-auto">{item.name}</pre>
                            <p className="p-4 w-1/2 md:w-1/4 text-base font-semibold md:text-2xl bg-black/5" title={`${item.ppkg} ₹/kg`}>{item.price}₹</p>
                            <p className="p-4 w-1/2 md:w-1/4 text-base font-semibold md:text-2xl bg-black/5">{item.quantity}GM</p>
                            <div className="w-1/2 md:w-1/4 flex bg-black/5">
                                <p className="p-4 flex-1 text-base font-semibold md:text-2xl">{(100-(item.ppkg*100)/max).toFixed(2)}%</p>
                                <button className="p-4 bg-red-500 font-semibold text-white"
                                    onClick={() => {
                                        setData(data.filter((i) => i.name != item.name))
                                        localStorage.setItem('data', JSON.stringify(data.filter((i) => i.name != item.name)));
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    )
                })}
                    
            </div>



            <button onClick={() => { setShowModal(true) }} className="bg-red-500 p-4 fixed top-0 text-white font-semibold">Add Entry</button>
            {showModal ? (
                <>
                    <div className="justify-center backdrop-blur items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/50">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl px-3">
                            
                            <div
                                className={
                                    "border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-gray-100"}>
                                
                                <div className="flex items-start justify-between px-2 pt-2 rounded-t">
                                    <input type="text" placeholder="Enter Product Name" className="bg-transparent focus:outline-none border-0 rounded-lg py-2 px-3 block w-full leading-normal focus:ring-0 font-semibold text-xl"
                                        onChange={(e) => setEntry({ ...entry, "name": e.target.value })}
                                        value={entry.name} 
                                    />
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => { setShowModal(false) }}
                                    >
                                        <span className="bg-transparent text-black leading-6 h-6 w-6 block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative px-2 flex-auto">
                                    <input type="number" placeholder="Enter The Price" className="bg-transparent focus:outline-none border-0 rounded-lg py-2 px-3 block w-full leading-normal focus:ring-0 font-semibold text-md "
                                        onChange={(e) => setEntry({ ...entry, "price": e.target.value })}
                                        value={entry.price}
                                    />
                                </div>
                                <div className="relative px-2 flex-auto">
                                    <input type="number" placeholder="Enter The Quantity" className=" bg-transparent focus:outline-none border-0 rounded-lg py-2 px-3 block w-full leading-normal focus:ring-0 font-semibold text-md"
                                        onChange={(e) => setEntry({ ...entry, "quantity": e.target.value })}
                                        value={entry.quantity}
                                    />
                                </div>
                               
                                <div className="flex items-center justify-end px-2 pb-2 rounded-b">
                                    <button className="bg-teal-400 text-gray-600 active:bg-teal-500 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"type="button"
                                        onClick={() => {

                                            setData([...data, {...entry, "ppkg":((1000*entry.price)/entry.quantity).toFixed(2)}])
                                            localStorage.setItem("data", JSON.stringify([...data, { ...entry, "ppkg": ((1000 * entry.price) / entry.quantity).toFixed(2) }]))
                                            setEntry({})
                                            setShowModal(false)
                                        }}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>

    )
}