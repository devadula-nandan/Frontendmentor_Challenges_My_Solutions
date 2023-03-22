import { useState,useEffect } from "react";

// .word{
//     animation: fadeInUp2 0.3s ease-in-out;
//   }
//   @keyframes fadeInUp2 {
//     0% {
//       opacity: 0;
//       margin-top: 1rem;
//     }
//     100% {
//       opacity: 1;
//       margin-top: 0rem;
//     }
//   }
export default function AniText({text}) {
    const [textArray, setTextArray] = useState(text.split(""))
    useEffect(()=>{
        setTextArray(text.split(""))
    },[text])
    return (
            <pre className="flex mb-3 h-5">{textArray.map((word,index)=>{
                return <span key={index} className="word from" style={{opacity: "1"}}>{word}</span>
            })}</pre>
    );
}