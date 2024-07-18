"use client"
import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="navbar bg-primary shadow-md glass">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl font-extrabold">
              <Image src="/logoKota.png" alt="Logo Kota Tasikmalaya" width={50} height={50} className="inline-block w-10 h-10 mr-2" />
              Dashboard Wangsit
            </a>
        </div>
        <div className="flex-none">
            <h3 className='text-xl font-bold'>{time}</h3>
        </div>
    </div>
  )
}

export default Navbar