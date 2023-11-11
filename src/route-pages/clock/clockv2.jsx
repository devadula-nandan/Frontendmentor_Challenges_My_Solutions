import React, { useEffect, useState } from 'react';
import { Dial, Second, Minute, Hour, Second1, Second2 } from './assets';

export const Clockv2 = () => {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('data-theme', localStorage.getItem('theme'));
    }, []);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours() % 12; // 12-hour clock

            const secondsAngle = (seconds / 60) * 360;
            const minutesAngle = ((minutes * 60 + seconds) / 3600) * 360;
            const hoursAngle = ((hours * 3600 + minutes * 60 + seconds) / 43200) * 360;

            setAngle(secondsAngle);

            requestAnimationFrame(updateClock);
        };

        const animationId = requestAnimationFrame(updateClock);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className='p-2 w-[100vmin] h-[100vmin] relative'>
            <Dial />
            <Second angle={angle} />
            {/* <Minute angle={minutesAngle} />
            <Hour angle={hoursAngle} /> */}
            {/* <Second1 />
            <Second2 /> */}
        </div>
    );
};
