import React, { useEffect } from 'react'
import { Dial, Second, Minute, Hour, Second1, Second2 } from './assets'
export const Clockv2 = () => {
    const [angle, setAngle] = React.useState(0);
    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('data-theme', localStorage.getItem('theme'))
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(angle + 6);
        }, 1000);
        return () => clearInterval(interval);
    }, [angle]);
    return (
        <div className=' p-[2vmin] w-[100vmin] h-[100vmin] relative'>
            <Dial />
            <Second angle={angle} />
            {/* <Minute />
            <Hour /> */}
            {/* <Second1 />
            <Second2 /> */}
        </div>
    )
}