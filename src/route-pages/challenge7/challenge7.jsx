import { useState, useEffect } from 'react'
import axios from 'axios'
const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
export const Challenge7 = () => {
    const [keyword, setKeyword] = useState('')
    const [wordData, setWordData] = useState(undefined)
    const [error, setError] = useState({})

    const getData = async () => {
        if (!keyword) return
        try {
            const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
            console.log(res.data)
            setWordData(res.data)
        }
        catch (e) {
            console.log(e.response.data);
            setError(e.response.data)
        }
    }
    useEffect(() => {
        let timeoutId;
        if (keyword) {
          timeoutId = setTimeout(() => {
            getData();
          }, 800);
        }
    
        return () => clearTimeout(timeoutId);
      }, [keyword])
    const playAudio = (src) => {
        const audio = new Audio(src)
        audio.play()
    }

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="navbar bg-base-100 p-0 min-h-0">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl px-0 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-12 text-primary' fill="currentColor" viewBox="0 0 24 24">
                                <g stroke="none" strokeWidth="1" fill="currentColor">
                                    <g fill="currentColor" fillRule="nonzero">
                                        <path d="M18,2 C19.3807,2 20.5,3.11929 20.5,4.5 L20.5,18.75 C20.5,19.1642 20.1642,19.5 19.75,19.5 L5.5,19.5 C5.5,20.0523 5.94772,20.5 6.5,20.5 L19.75,20.5 C20.1642,20.5 20.5,20.8358 20.5,21.25 C20.5,21.6642 20.1642,22 19.75,22 L6.5,22 C5.11929,22 4,20.8807 4,19.5 L4,4.5 C4,3.11929 5.11929,2 6.5,2 L18,2 Z M18,3.5 L6.5,3.5 C5.94772,3.5 5.5,3.94772 5.5,4.5 L5.5,18 L19,18 L19,4.5 C19,3.94772 18.5523,3.5 18,3.5 Z M16,5 C16.5523,5 17,5.44772 17,6 L17,8 C17,8.55228 16.5523,9 16,9 L8,9 C7.44772,9 7,8.55228 7,8 L7,6 C7,5.44772 7.44772,5 8,5 L16,5 Z M15.5,6.5 L8.5,6.5 L8.5,7.5 L15.5,7.5 L15.5,6.5 Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 z-50">
                            <li tabIndex={0}>
                                <a>
                                    Font
                                    <svg className="fill-current text-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabIndex={0}>
                                <a>
                                    theme
                                    <svg className="fill-current text-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    {themes.map((theme, index) => (
                                        <li key={index} onClick={() => document.getElementsByTagName('html')[0].setAttribute('data-theme', theme)} className={theme}> <a>{theme}</a></li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative mt-8">
                    <form action="" onSubmit={(e) => { e.preventDefault(); getData() }}>
                        <input type="text" value={keyword} placeholder="Type here" className="input font-semibold w-full pr-11 bg-base-200" onChange={(e) => setKeyword(e.target.value)} />
                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="p-3 bi bi-search absolute right-[2px] top-1/2 -translate-y-1/2 text-primary w-11 cursor-pointer hover:bg-black/5 transition-all rounded-md" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>

                    </form>

                </div>
                {wordData?.map((result, index) => {
                    return (
                        <div key={index} className="mt-6 md:mt-10">
                            <div className="flex">
                                <div className="flex flex-col">
                                    <h6 className="text-4xl md:text-5xl lg:text-6xl mb-3 font-bold">{result.word}</h6>
                                    <h1 className="text-2xl font-semibold text-primary mb-6">{result.phonetic}</h1>
                                </div>
                                {result.phonetics.map((phonetic, index) => (
                                    phonetic.audio && 
                                    <>
                                        <div key={index} className="w-16 h-16 md:w-24 md:h-24 hover:scale-[1.1] mt-auto mb-8 transition-all active:scale-90 bg-primary/30 rounded-full cursor-pointer ml-auto flex items-center justify-center" onClick={() => playAudio(phonetic.audio)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-play-fill w-8 text-primary" viewBox="0 0 16 16">
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                            </svg>
                                        </div>
                                    </>
                                ))}
                            </div>

                            {result.meanings.map((meaning, index) => (
                                <>
                                    <div className="flex mb-6">
                                        <h1 key={index} className="text-xl md:text-2xl font-bold">{meaning.partOfSpeech}</h1>
                                        <div className='ml-5 bg-base-300 w-full h-[1px] my-auto'></div>

                                    </div>
                                    <p className='mb-4 text-base-content/70 font-normal text-lg'>Meaning</p>
                                    <ul className='list-disc pl-4 marker:text-primary mb-4'>
                                        {meaning.definitions.map((definition, index) => (
                                            <li key={index}>{definition.definition}</li>
                                        ))}
                                    </ul>
                                    {meaning.synonyms.length > 0 && (
                                        <p className='mb-4 text-base-content/70 font-normal text-lg'>Synonyms: {meaning.synonyms.map((synonym, index) => (
                                            <>
                                            <span key={index} onClick={()=>{setKeyword(synonym); getData()}} className='text-primary font-semibold text-lg inline cursor-pointer'>{synonym}</span><span>, </span>
                                            
                                            </>
                                            ))}</p>
                                    )}
                                    {meaning.antonyms.length > 0 && (
                                        <p className='mb-4 text-base-content/70 font-normal text-lg'>Antonyms: {meaning.antonyms.map((antonym, index) => (
                                            <>
                                            <a key={index} href={antonym} className='text-primary font-semibold text-lg'>{antonym}</a><span>, </span>
                                            </>
                                            
                                        ))}</p>
                                    )}
                                        
                                    


                                </>
                            ))}


                        </div>
                    )
                })
                }
            </div>

        </>
    )
}