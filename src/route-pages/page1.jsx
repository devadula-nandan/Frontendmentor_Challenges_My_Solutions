import { useEffect, useRef, useState } from "react"

export const Page1 = () => {
  const shape1 = useRef(null)
  const shape2 = useRef(null)
  const [angle, setAngle] = useState(0)
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']
  const [ci, setCi] = useState(0)

  const rotateShapes = () => {
    if((ci+1)%2 === 0) {
        shape1.current.style.borderBottomColor = colors[ci]+"50"
        shape1.current.style.borderRightColor = colors[ci]+"50"
        shape2.current.style.borderBottomColor = colors[ci]+"80"
        shape2.current.style.borderRightColor = colors[ci]+"80"
    } else {
        shape1.current.style.borderTopColor = colors[ci]+"50"
        shape1.current.style.borderLeftColor = colors[ci]+"50"
        shape2.current.style.borderTopColor = colors[ci]+"80"
        shape2.current.style.borderLeftColor = colors[ci]+"80"
    }


    
    shape1.current.style.transform = `translate(50%, -50%) rotate(${angle}deg)`
    shape2.current.style.transform = `translate(50%, -50%) rotate(${-1*(angle)}deg)`
  }

  return (
    <div className="bg-black h-screen w-screen relative overflow-hidden">
      <div className="absolute right-0 top-1/2">
        <div className="relative -rotate-45">
          <div
            ref={shape1}
            className="shape1 bg-black absolute right-0 border-[76vmax] rounded-full transform-gpu transition-transform duration-1000 ease-in-out" style={{transform: "translate(50%, -50%) rotate(0deg)", borderTopColor: colors[0]+"50", borderLeftColor: colors[0]+"50"}}
          ></div>
          <div
            ref={shape2}
            className="shape2 bg-black absolute right-0 border-[40vmax] rounded-full transform-gpu transition-transform duration-1000 ease-in-out" style={{transform: "translate(50%, -50%) rotate(0deg)", borderTopColor: colors[0]+"80", borderLeftColor: colors[0]+"80"}}
          ></div>
          <div className="shape3 bg-black absolute right-0 h-[20vmax] w-[20vmax] translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        </div>
      </div>
      <div className="absolute">
      <button className="btn mr-4" onClick={()=>{setAngle(angle-180);setCi(ci === 0 ? 4 : ci-1); rotateShapes()}}>prev</button>
      <button className="btn" onClick={()=>{setAngle(angle+180);setCi(ci === 4 ? 0 : ci+1); rotateShapes()}}>next</button>
      </div>
    </div>
  )
}
