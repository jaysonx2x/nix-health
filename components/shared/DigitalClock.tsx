'use client';

import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Asia/Manila'
            });
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                dateStyle: 'full',
                timeZone: 'Asia/Manila'
            }).format(now);

            setTime(formattedTime);
            setDate(formattedDate);
        };

        updateClock();

        const timerID = setInterval(updateClock, 1000);

        return () => clearInterval(timerID);
    }, []);

  return (
    <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-extrabold lg:text-7xl'>
            {time}
        </h1>
        <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
            {date}
        </p>
    </div>
  )
}

export default DigitalClock