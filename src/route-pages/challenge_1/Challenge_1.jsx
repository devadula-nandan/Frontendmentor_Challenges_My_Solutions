import { PassJS } from 'passjs-generator';
import { useState } from 'react';
import './css/challenge_1.css'
// https://www.npmjs.com/package/passjs-generator
// password generator https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh
export const Challenge_1 = () => {
    const [params, setParams] = useState({ le: 6, u: false, l: false, n: false,s:false})
    const [password, setPassword] = useState("")
    const generatePassword = () => {
        const keyConfig = {
            salt: 'hNhVx5CnNuLkHpcxzmyYasT5nAE6Wp7J',
            iv: 'gpT6ekXksNkK7yZk2zfU2Jc6KxqwjWja',
            time: new Date().getTime(),
            keyword: 'service-name',
            upper: params.u,
            lower: params.l,
            number: params.n,
            symbol: params.s,
            length: params.le,
            minNumbers: 3,
            minSymbols: 1,
        };
        setPassword(PassJS(keyConfig, 'mySecretWord'))
    }
    return (
        <div className="bg-gray-900 w-screen h-screen flex items-center">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4">
                        <h2 className=" text-center text-slate-600 font-mono font-bold text-xl mb-6">Password Generator</h2>
                        <div className="bg-gray-800 flex px-6 py-3">
                            <input className=" bg-transparent w-full text-slate-300 font-mono font-medium text-3xl focus-visible:outline-none" type={"text"} readOnly value={password} />
                            <button className="text-green-300 hover:text-slate-50 transition-all duration-300 active:scale-90" onClick={() => { navigator.clipboard.writeText(password) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                </svg>
                            </button>
                        </div>
                        <div className="bg-gray-800 flex mt-5 p-5">
                            <div className="pt-1 w-full">
                                <div className="flex justify-between">
                                    <p className="form-p text-slate-300 font-semibold">Character Length</p>
                                    <p className="text-3xl text-green-300 leading-5">{ params.le}</p>
                                </div>
                                
                                <div className="p-3 mt-3">
                                    <input type="range" min="6" max="26" defaultValue={params.le} className="range-slider w-full" onInput={(e) => { e.target.style.background = `linear-gradient(to right,#86efac,#86efac ${((e.target.value - 6) * 5)}%,#0000004d ${((e.target.value - 6) * 5)}%)`; setParams({...params, le: e.target.value}) }}
                                        id="range" />
                                    <label className="form-p text-slate-300 font-semibold block">
                                        <input type="checkbox" className="accent-green-300 mt-7 pl-9 mr-4" onClick={() => { setParams({ ...params, u: !params.u }) }} />Include Uppercase Letters
                                    </label>
                                    <label className="form-p text-slate-300 font-semibold block">
                                        <input type="checkbox" className="accent-green-300 mt-5 pl-9 mr-4" onClick={() => { setParams({ ...params, l: !params.l }) }} />Include Lowercase Letters
                                    </label>
                                    <label className="form-p text-slate-300 font-semibold block">
                                        <input type="checkbox" className="accent-green-300 mt-5 pl-9 mr-4" onClick={() => { setParams({ ...params, n: !params.n }) }} />Include Numbers
                                    </label>
                                    <label className="form-p text-slate-300 font-semibold block">
                                        <input type="checkbox" className="accent-green-300 mt-5 pl-9 mr-4" onClick={() => { setParams({ ...params, s: !params.s }) }} />Include Symbols
                                    </label>
                                </div>
                                <div className="flex bg-gray-900 justify-between">
                                    <h2 className=" text-center text-slate-600 font-mono font-bold text-xl ml-5 my-3">STRENGTH</h2>
                                    <div className="flex mr-4">
                                        <h2 className=" text-center text-slate-300 font-mono font-bold text-xl my-3">WEAK</h2>
                                        <div className="flex">
                                            <div className="bg-yellow-300 w-3 my-3 mx-1"></div>
                                            <div className="bg-yellow-300 w-3 my-3 mx-1"></div>
                                            <div className="bg-transparent w-3 my-3 mx-1 border-2 border-slate-300"></div>
                                            <div className="bg-transparent w-3 my-3 mx-1 border-2 border-slate-300"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-5">
                                    <button onClick={() => { generatePassword()}} className="bg-green-300 w-full h-full py-3 text-slate-600 font-mono font-bold text-xl border-green-300 border-2 hover:bg-transparent transition-all hover:text-green-300">Generate&nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}