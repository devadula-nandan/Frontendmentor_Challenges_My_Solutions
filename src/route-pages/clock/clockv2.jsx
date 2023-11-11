import React, { useEffect, useState } from 'react';
import { Dial, Second, Minute, Hour, Second1, Second2 } from './assets';

export const Clockv2 = () => {
    const [angle, setAngle] = useState({
        s: 0,
        m: 0,
        h: 0
    });

    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('data-theme', localStorage.getItem('theme'));
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setAngle({
                s: angle.s + 1,
                m: angle.m + 1,
                h: angle.h + 1
            })
        }, 20);
        return () => clearInterval(interval);
    }, [angle]);
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours() % 12; // 12-hour clock

            const secondsAngle = (seconds / 60) * 360;
            const minutesAngle = ((minutes * 60 + seconds) / 3600) * 360;
            const hoursAngle = ((hours * 3600 + minutes * 60 + seconds) / 43200) * 360;

            setAngle({
                s: secondsAngle,
                m: minutesAngle,
                h: hoursAngle
            })

            requestAnimationFrame(updateClock);
        };

        const animationId = requestAnimationFrame(updateClock);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className='p-2 w-[100vmin] h-[100vmin] relative'>
            <Dial />
            <Second angle={angle.s} />
            <Minute angle={angle.m} />
            <Hour angle={angle.h} />
            {/* <Second1 />
            <Second2 /> */}
        </div>
    );
};
